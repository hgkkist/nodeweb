
var express = require('express');
var app = express();
const ejs = require('ejs');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.listen(8080);

app.get('/', function (req, res) {
   var listnames = ["Louise", "Sadie", "Erik", "Raph", "Gina"];
   res.render('pages/index', {
      listnames: listnames
   });
});

