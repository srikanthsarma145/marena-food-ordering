let mongoose = require('mongoose')
autoIncrement = require('mongoose-auto-increment')
var connection = mongoose.createConnection("mongodb+srv://pranshudatta_25:hellodarkness@cluster0-rf32c.mongodb.net/test?retryWrites=true&w=majority");
autoIncrement.initialize(connection);
mongoose.set('useCreateIndex',true);
let orderSchema = new mongoose.Schema({
    token: {type: Number, default: 0},
    id: [{
        type: Number, required: true
    }]   
});
orderSchema.plugin(autoIncrement.plugin, { model: 'order', field: 'token', startAt: 0, incrementBy: 1 });
module.exports = connection.model('order', orderSchema);