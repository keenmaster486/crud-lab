app.use(express.static('public'));

app.get('/grocery', function(req, res)
{
	res.render('index.ejs', {})
});

app.get('/grocery/:id', function(req, res)
{
	res.render('show.ejs', {});
});
