var express = require("express");
var app = express();
var expect = require("chai").expect;
var request = require("supertest");
var Promise = require("bluebird");

var dataSavedVariant;

// mocks
var db = {
    findVariants: function(){
      return new Promise( function(resolve, reject) {
          resolve(["hi"]);
      })  
    },
    saveVariant: function(variant) {
        dataSavedVariant = variant;
    }
};
var variantService = require("../../variants-service")(db,app);

describe("get variants", function() {
    
    it("get should give me a json list of variants", function(done){
        request(app).get('/api/variants')
        .expect('Content-Type', /json/)
        .end(function(err, res){
            expect(res.body).to.be.a('Array');
            done();
        });
    })
})

describe("save variants", function() {

    it("should validate that name is greater than 3 characters");
    it("should validate that name is less than 100 characters");
    it("should validate that description is greater than 3 characters");
    it("should validate that description is less than 250 characters");

    var newVariant = {name: 'c.512A>C', description: 'Variant #1'};

    it("should pass the variant to the database server", function(done) {
        request(app).post('/api/variants').send(newVariant).end(function(err, res) {
            expect(dataSavedVariant).to.deep.equal(newVariant);
            done();
        })
    });

    it("should return a status of 200 to the front end if the database saved");
    it("should return a variant with an id");
    it("should return an error if the daatabase failed");
});