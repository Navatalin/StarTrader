'use strict';
module.exports = function(app){
    var planets = require('../controllers/planetController');

    app.route('/planets').get(planets.list_all_planets).post(planets.create_planet);
    app.route('/planets/:planetId').get(planets.read_planet).put(planets.update_planet).delete(planets.delete_planet);
    
}