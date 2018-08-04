var express = require('express'),
    app = express(),
    port = process.env.PORT || 8002,
    mongoose = require('mongoose'),
    Planet = require('./api/models/planetModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:32770/PlanetServiceDb');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var routes = require('./api/routes/planetServiceRoutes');
routes(app);

app.use(function(req,res){
    res.status(404).send({url: req.originalUrl + ' not found'});
});
app.listen(port);

console.log('Planet service started on port: ' + port);