const express = require('express');
const router  = express.Router();
const Item    = require('../models/itemSchema')

router.get('/', function(req, res)
{
  Item.find({}, (err, foundItems)=>{
    if (err) {
      console.log(err);
    } else {
      res.render('index.ejs', {
        groceries: foundItems
      })
    }
  })
});

router.get('/:id', function(req, res)
{
  Item.findById(req.params.id, (err, item)=>{
    if (err){
      console.log(err);
    } else {
      res.render('show.ejs', {
        grocery: item
      });
    }
  })
});

router.get('/:id/edit', function(req, res)
{
  Item.findById(req.params.id, (err, item)=>{
    if (err){
      console.log(err);
    } else {
      res.render('show.ejs', {
        grocery: item,
        id: req.params.id
      });
    }
  })
});


router.delete('/:id', function(req, res)
{
  Item.findByIdAndDelete(req.params.id, (err, item)=>{
    if (err){
      console.log(err);
    } else {
      res.redirect('/grocery')
    }
  })
});



module.exports = router;
