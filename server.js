var express = require('express');
var mongoose = require('mongoose');
var variantModel = require("./models/Variant");

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/api/variants', function(req, res) {
    mongoose.model('Variant').find({}).exec(function(error,collection) {
        res.send(collection);
    })
});

app.get('*', function(req, res) {
    res.render('index');
});

//mongoose.connect('mongodb://localhost/variantresolver');
mongoose.connect('mongodb://psdev:psdev@ds053320.mongolab.com:53320/variantresolver')

var con = mongoose.connection;

con.once('open', function() {
    console.log('connected to mongodb successfully!');
    variantModel.seedVariants();
});

//app.listen(3000);  // if local this is good enough
app.listen(process.env.PORT, process.env.IP);  // cloud 9 env variables.
