let mongoose = require('mongoose')

const uri = "mongodb+srv://pranshudatta_25:hellodarkness@cluster0-rf32c.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri);
mongoose.set('useCreateIndex',true);

let signupSchema = new mongoose.Schema({
    name: {type: String, required: true, max: 100},
    mobno: {type: Number, required: true},
    password: {type: String, required: true}
});
module.exports = mongoose.model('signup', signupSchema);