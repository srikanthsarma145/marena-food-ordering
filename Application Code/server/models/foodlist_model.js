let mongoose = require('mongoose')

const uri = "mongodb+srv://pranshudatta_25:hellodarkness@cluster0-rf32c.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri);
mongoose.set('useCreateIndex',true);

let foodlistSchema = new mongoose.Schema({
    id: {type: Number, required: true, },
    name: {type: String, required: true},
    availability: {type: Boolean, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
});
module.exports = mongoose.model('foodlist', foodlistSchema);