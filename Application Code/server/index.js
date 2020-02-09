const express = require('express');
const bodyParser = require('body-parser');
const signup = require('./routes/signup_route'); 
const foodlist = require('./routes/foodlist_route');
const order = require('./routes/order_route');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const identitycounter = require('./routes/identity_route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use('/api/signup', signup);
app.use('/api/foodlist',foodlist);
app.use('/api/order', order);
app.use('/api/identitycounter', identitycounter);

//production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public'))
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

const port = process.env.PORT || 7501
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});