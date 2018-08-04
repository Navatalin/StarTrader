var express = require('express'),
    app = express(),
    port = process.env.PORT || 8001,
    mongoose = require('mongoose'),
    Player = require('./api/models/shipModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:32770/ShipServiceDb');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


var routes = require('./api/routes/shipServiceRoutes');
routes(app);

app.use(function(req,res){
    res.status(404).send({url: req.originalUrl + ' not found'});
});
app.listen(port);

console.log('Ship service started on port: ' + port);
