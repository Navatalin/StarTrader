'use strict';

var mongoose = require('mongoose'),
    Player = mongoose.model('Players');

exports.list_all_players = function(req, res){
    Player.find({}, function(err, player){
        if(err)
            res.send(err);
        res.json(player);
    });
};

exports.create_player = function(req,res){
    var new_player = new Player(req.body);
    new_player.save(function(err,player){
        if(err)
            res.send(err);
        res.json(player);
    });
};

exports.read_player = function(req,res){
    Player.findById(req.params.playerId, function(err, player){
        if(err)
            res.send(err);
        res.json(player);
    });
};

exports.update_player = function(req, res){
    Player.findOneAndUpdate({_id: req.params.playerId},req.body, {new: true}, function(err,player){
        if(err)
            res.send(err);
        res.json(player);
    });
};

exports.delete_player = function(req, res){
    Player.remove({_id: req.params.playerId}, function(err,player){
        if(err)
            res.send(err);
        res.json({ message: 'Player deleted'});
    });
};

