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

router.get('/grocery/:id', function(req, res)
{
	res.render('show.ejs', {});
});




module.exports = router;
