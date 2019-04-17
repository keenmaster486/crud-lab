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

const arr = [{name: 'apple', amount: 10},{name: 'fruit', amount: 100},{name: 'pizza', amount: 420},{name: 'spoons', amount: 13},{name: 'beer', amount: 30}]

arr.forEach(function(item){
  Item.create(
    {
      name: item.name,
      amount: item.amount
    },
    (err, item)=>{
      if (err){
        console.log(err);
      }
    }
  )
})


module.exports = router;
