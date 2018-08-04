var express = require('express'),
    app = express(),
    port = process.env.PORT || 8000,
    mongoose = require('mongoose'),
    Player = require('./api/models/playerModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:32770/PlayerServiceDb');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


var routes = require('./api/routes/playerServiceRoutes');
routes(app);

app.use(function(req,res){
    res.status(404).send({url: req.originalUrl + ' not found'});
});
app.listen(port);

console.log('Player service started on port: ' + port);
