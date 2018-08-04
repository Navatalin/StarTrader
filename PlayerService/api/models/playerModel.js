'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
    name: {
        type: String,
        required: 'Player Name'
    },
    funds:{
        type:Number,
        default:0
    },
    Created_date:{
        type: Date,
        default: Date.now
    },
    Status:{
        type:[{
            type:String,
            enum: ['Active','Inactive']
        }],
        default:['Inactive']
    }

});

module.exports = mongoose.model('Players',PlayerSchema);