describe("posting variants", function(){
    
    var postRequestVariant;
    var newVariant = {name:'test name',description: 'test description'};
    
    beforeEach(module('app'));
    
    it("should call /api/variants with variant data", inject(function($httpBackend, variants){
        $httpBackend.whenPOST('/api/variants', function(data){
            postRequestVariant = JSON.parse(data);
            expect(postRequestVariant).to.not.be.empty;
            return true;
        }).respond(200);
        variants.save(newVariant);
        $httpBackend.flush();
    }));
})