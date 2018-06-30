'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    publishedAt: {
        type: String,
        required: 'Publish Date is required'
    },
    title: {
        type: String,
        required: 'Title is required'
    },
    description: {
        type: String
    },
    channelTitle: {
        type: String
    },
    channelId: {
        type: String
    },
    youtubeVideoId: {
        type: String,
        required: 'Youtube Video ID is required'
    },
    category: {
        type: [{
            type: String,
            enum: ['Mobile', 'Desktop', 'BackEnd', 'FrontEnd']
        }]
    },
    status: {
        type: [{
            type: String,
            enum: ['completed', 'ongoing', 'pending']
        }],
        default: 'pending'
    }
});

module.exports = mongoose.model('video', VideoSchema);