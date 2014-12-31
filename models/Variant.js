var mongoose = require("mongoose");

var variantSchema = mongoose.Schema({
   name:{type:String}, 
   description:{type:String}
});

mongoose.model('Variant', variantSchema);

