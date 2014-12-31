var bodyParser = require("body-parser");

module.exports = function(db, app) {
    app.use(bodyParser.json());
    
    app.get('/api/variants', function(req, res) {
        db.findVariants().then(function (collection) {
            res.send(collection);
        })
    });
    
    app.post('/api/variants', function(req, res){
        // mock db using di or ioc (proper approach)
        
        // quick and easy for now
        db.saveVariant(req.body);
        res.end();
    });
}
