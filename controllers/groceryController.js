const express = require('express');
const router  = express.Router();

app.get('/grocery', function(req, res)
{
	res.render('index.ejs', {})
});

app.get('/grocery/:id', function(req, res)
{
	res.render('show.ejs', {});
});




module.exports = router;
