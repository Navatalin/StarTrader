'use strict';

var mongoose = require('mongoose'),
    Ship = mongoose.model('Ships');

exports.list_all_ships = function(req, res){
    Ship.find({}, function(err, ship){
        if(err)
            res.send(err);
        res.json(ship);
    });
};

exports.create_ship = function(req,res){
    var new_ship = new Ship(req.body);
    new_ship.save(function(err,ship){
        if(err)
            res.send(err);
        res.json(ship);
    });
};

exports.read_ship = function(req,res){
    Ship.findById(req.params.shipId, function(err, ship){
        if(err)
            res.send(err);
        res.json(ship);
    });
};

exports.update_ship = function(req, res){
    Ship.findOneAndUpdate({_id: req.params.shipId},req.body, {new: true}, function(err,ship){
        if(err)
            res.send(err);
        res.json(ship);
    });
};

exports.delete_ship = function(req, res){
    Ship.remove({_id: req.params.shipId}, function(err,ship){
        if(err)
            res.send(err)
        res.json({ message: 'Ship deleted'});
    });
};

exports.read_ships_player = function(req, res){
    var ownerId = req.body.Owner;

    Ship.find({Owner: ownerId}, function(err, ship){
        if(err)
            res.send(err)
        res.json(ship);
    });
};
