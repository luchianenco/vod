'use strict';
const mongoose = require('mongoose');
const Video = mongoose.model('video');

exports.listLastVideos = function (req, res) {
    Video.find({}, function (err, entities) {
        if (err) {
            res.send(err);
        }

        res.json(entities);
    })
};

exports.getVideo = function(req, res) {
    Video.findById(req.params.videoId, function(err, entity) {
        if (err)
            res.send(err);
        res.json(entity);
    });
};
