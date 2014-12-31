var expect = require("chai").expect;
var mongoose = require("mongoose");
var variantModel = require("../models/Variant");
var Promise = require("bluebird");
var variantsData = require("../variants-data.js");

function resetVariants() {
    return new Promise( function(resolve, reject) {
        mongoose.connection.collections['variants'].drop(resolve, reject);
    });
}




describe("get variants", function(){
    
    var variants;
    
    before(function(done) {
        variantsData.connectDB('mongodb://localhost/variantresolver')
            .then(resetVariants)
            .then(variantsData.seedVariants)
            .then(variantsData.findVariants)
            .then(function(collection) {
                variants = collection;
                done();
        }); 
    });
    
    it("should never be empty since variants are seeded", function(){
        expect(variants.length).to.be.at.least(1);
    });
    
    it("should have a variant with a name", function(){
        expect(variants[0].name).to.not.be.empty;
    });
    
    it("should have a variant with a description", function(){
        expect(variants[0].description).to.not.be.empty;
    });
});