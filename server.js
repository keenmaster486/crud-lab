const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

require('./db/db');

const app = express();

let port = process.env.PORT;
if (process.env.PORT == null || process.env.PORT == "" || process.env.PORT == undefined)
{
	port = 3000;
}

//GROCERY LIST WEBAPP SERVER

app.use(express.static('public'));

app.get('/grocery', function(req, res)
{
	res.render('index.ejs', {})
});

app.get('/grocery/:id', function(req, res)
{
	res.render('show.ejs', {});
});

app.listen(port, function()
{
	console.log(`Server listening on port ${port}`);
});