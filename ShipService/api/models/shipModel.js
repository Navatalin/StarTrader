'user strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShipSchema = new Schema({
    name: {
        type: String,
        required: 'Ship Name'
    },
    Owner:{
        type:String,
        required: 'Player Id'
    },
    Created_date:{
        type: Date,
        default: Date.now
    },
    Status:{
        type:[{
            type:String,
            enum: ['Operational','Damaged','Destroyed']
        }],
        default:['Operational']
    },
    Cargo:{
        type:[{
            type:String
        }],
        default: []
    },
    Location:{
        type:String,
        required: 'Ship Location'
    }

});

module.exports = mongoose.model('Ships',ShipSchema);