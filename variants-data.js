var mongoose = require("mongoose");
var Promise = require("bluebird");

var Variant = mongoose.model('Variant');

var findVariants = function(query) {
    return Promise.cast(mongoose.model('Variant').find(query).exec());
}

var createVariant = Promise.promisify(Variant.create, Variant);

// exports 

exports.findVariants = findVariants;

exports.connectDB = Promise.promisify(mongoose.connect, mongoose);

exports.saveVariant = createVariant;

exports.seedVariants = function() {
    return findVariants({}).then(function(collection){
        if(collection.length === 0) {
            return Promise.map(variants, function(variant){
                return createVariant(variant);
            })
        }
    })
}

var variants = [
        {name:'c.512A>C', description:'Variant #1'},
        {name:'c.1056delG', description: 'Variant #2'},
        {name:'c.102-2G>C', description: 'Variant #3'}
    ];
