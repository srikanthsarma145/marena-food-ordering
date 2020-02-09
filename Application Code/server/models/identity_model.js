let mongoose = require('mongoose')

const uri = "mongodb+srv://pranshudatta_25:hellodarkness@cluster0-rf32c.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri);
mongoose.set('useCreateIndex',true);

let identitySchema = new mongoose.Schema({
    count: {type: Number, required: true},
    model: {type: String, required: true},
    field: {type: String, required: true}
});
module.exports = mongoose.model('identitycounter', identitySchema);