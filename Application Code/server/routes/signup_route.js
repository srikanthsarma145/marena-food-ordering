const express = require('express');
const router = express.Router();
const signup = require('../models/signup_model');

router.post('/create', (req, res) => {
    if(!req.body) {
      return res.status(400).send('Request body is missing')
    }
  
    let model = new signup(req.body)
    model.save()
      .then(doc => {
        if(!doc || doc.length === 0) {
          return res.status(500).send(doc)
        }
  
        res.status(201).send(doc)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })
  router.get('/user', (req, res) => {
    if(!req.query.mobno) {
      return res.status(400).send('Missing URL parameter: mobno')
    }
    signup.findOne({
      mobno: req.query.mobno
    })
      .then(doc => {
        res.json(doc)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })
module.exports = router;