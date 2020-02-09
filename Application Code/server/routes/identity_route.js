const express = require('express');
const router = express.Router();
const identitycounter = require('../models/identity_model');

  router.get('/recent', (req, res) => {
   
    identitycounter.find({
    })
      .then(doc => {
        res.json(doc);
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })
module.exports = router;