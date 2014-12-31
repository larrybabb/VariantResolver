var express = require('express');
var variantModel = require("./models/Variant");
var variantsData = require("./variants-data.js");

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/api/variants', function(req, res) {
    variantsData.findVariants().then(function (collection) {
        res.send(collection);
    })
});

app.get('*', function(req, res) {
    res.render('index');
});

//mongoose.connect('mongodb://localhost/variantresolver');
variantsData.connectDB('mongodb://psdev:psdev@ds053320.mongolab.com:53320/variantresolver')
.then(function() {
    console.log('connected to mongodb successfully!');
    variantsData.seedVariants();
});

//app.listen(3000);  // if local this is good enough
app.listen(process.env.PORT, process.env.IP);  // cloud 9 env variables.
