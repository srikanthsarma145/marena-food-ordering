const express = require('express');
const router = express.Router();
const order = require('../models/order_model');

router.post('/create', (req, res) => {
    if(!req.body) {
      return res.status(400).send('Request body is missing')
    }
    let model = new order(req.body)
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
  router.get('/list', (req, res) => {
    if(!req.query.token) {
      return res.status(400).send('Missing URL parameter: token')
    }
    order.findOne({
      token: req.query.token
    })
      .then(doc => {
        res.json(doc)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })
  router.get('/allorders', (req, res) => {
  order.find({
})
  .then(doc => {
    res.json(doc)
  })
  .catch(err => {
    res.status(500).json(err)
  })
})

module.exports = router;