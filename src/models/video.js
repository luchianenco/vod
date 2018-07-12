'use strict';
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    _id: {
        type: String,
        required: 'Unique ID is required',
    },
    publishedAt: {
        type: Date,
        required: 'Publish Date is required'
    },
    title: {
        type: String,
        required: 'Title is required'
    },
    description: {
        type: String
    },
    language: {
        type: String,
        required: 'Language is required',
        default: 'English'
    },
    channelTitle: {
        type: String
    },
    channelId: {
        type: String
    },
    category: {
        type: [{
            type: String,
            enum: ['Mobile', 'Desktop', 'BackEnd', 'FrontEnd', 'Highload']
        }]
    },
    status: {
        type: [{
            type: String,
            enum: ['completed', 'ongoing', 'pending']
        }],
        default: 'pending'
    },
    thumbnails: {
        type: Object
    },
    tags: {
        type: Array
    }
});
VideoSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('video', VideoSchema);