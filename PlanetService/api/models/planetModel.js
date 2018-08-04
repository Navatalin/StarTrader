'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlanetModel = new Schema({
    name: {
        type: String,
        required: 'Planet Name'
    },
    planetType: {
        type:[{
            type:String,
            enum: ['Habitable','Barren','Gas','Asteroid']
        }],
        default:['Habitable']
    },
    econType: {
        type:[{
            type:String,
            enum:['Tech','Farming','Mining','Frontier']
        }],
        default:['Farming']
    },
    planetSize:{
        type: Number,
        default: 6
    }
});
