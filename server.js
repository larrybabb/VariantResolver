var express = require('express');
var variantModel = require("./models/Variant");
var variantsData = require("./variants-data.js");

var app = express();

require("./variants-service.js")(variantsData, app);

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

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
