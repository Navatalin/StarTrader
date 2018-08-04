'use stict';
module.exports = function(app){
    var ships = require('../controllers/shipController');

    app.route('/ships').get(ships.list_all_ships).post(ships.create_ship);
    
    app.route('/ships/:shipId').get(ships.read_ship).put(ships.update_ship).delete(ships.delete_ship);

    app.route('/ships/player').post(ships.read_ships_player);
};