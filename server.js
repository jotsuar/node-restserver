const express = require('express')
const app = express();
const hbs = require("hbs");

app.use(express.static(__dirname + '/public'));

hbs.registerPartials( __dirname + '/views/partials');

//expres hbs
app.set('view engine', 'hbs');

 
app.get('/', function (req, res) {
    
    res.render('home',{
        nombre: 'Jhonatan',
        anio: new Date().getFullYear()
    })
})

app.get('/about', function (req, res) {
    
    res.render('about',{
        nombre: 'Jhonatan',
        anio: new Date().getFullYear()
    })
})
 
 
app.listen(3000)