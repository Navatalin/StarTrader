'use stict';
module.exports = function(app){
    var players = require('../controllers/playerController');

    app.route('/players').get(players.list_all_players).post(players.create_player);
    
    app.route('/players/:playerId').get(players.read_player).put(players.update_player).delete(players.delete_player);
};