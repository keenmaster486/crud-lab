const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

const port = 3000;

//GROCERY LIST WEBAPP SERVER

app.use(express.static('public'));





app.listen(port, function()
{
	console.log(`Server listening on port ${port}`);
});