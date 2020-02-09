const express = require('express');
const router = express.Router();
const foodlist = require('../models/foodlist_model');

router.post('/create', (req, res) => {
    if(!req.body) {
      return res.status(400).send('Request body is missing')
    }
    
    let model = new foodlist(req.body)
    model.save()
      .then(doc => {
        if(!doc || doc.length === 0) {
          return res.status(500).send(doc)
        }
        res.status(201).send(doc)
      }).catch(err => {
        res.status(500).json(err)
      })
  })
  router.get('/fooditem', (req, res) => {
    if(!req.query.id) {
      return res.status(400).send('Missing URL parameter: id')
    }
    foodlist.find({
      id: req.query.id
    })
      .then(doc => {
        res.json(doc)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })
  router.get('/fooditems', (req, res) => {
    
    foodlist.find({
    })
      .then(doc => {
        res.json(doc)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })
  router.put('/avail', (req, res) => {
    if(!req.query.id) {
      return res.status(400).send('Missing URL parameter: id')
    }
  
    foodlist.findOneAndUpdate({
      id: req.query.id
    }, req.body, {
      new: true
    })
      .then(doc => {
        res.json(doc)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })
module.exports = router;