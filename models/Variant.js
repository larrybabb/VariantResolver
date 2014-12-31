var mongoose = require("mongoose");

var variantSchema = mongoose.Schema({
   name:{type:String}, 
   description:{type:String}
});

var Variant = mongoose.model('Variant', variantSchema);

exports.seedVariants = function() {
    Variant.find({}).exec(function(error, collection){
        if(collection.length === 0) {
            Variant.create({name:'c.512A>C', description:'Variant #1'});
            Variant.create({name:'c.1056delG', description: 'Variant #2'});
            Variant.create({name:'c.102-2G>C', description: 'Variant #3'});
        }
    })
}