'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationModel = new Schema({
    shipId:{
        type: String,
        required: 'Ship Id'
    },
    direction:{
        type:[{
            type:String,
            enum: ['Outbound','Inbound','Parked']
        }],
        default:['Parked']
    },
    Origin:{
        type:String,
        required: 'Origin planet Id'
    },
    Destination:{
        type:String,
        required:'Destination planet Id'
    }
})