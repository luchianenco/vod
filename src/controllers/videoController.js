'use strict';
const mongoose = require('mongoose');
const Video = mongoose.model('video');
// TODO move this in in configuration or env variable
const pageSize = 3;

// TODO move from controller into a repository
exports.listLastVideos = function (req, res) {
    Video.find({}).limit(20).exec(function (err, entities) {
        if (err) {
            res.send(err);
        }

        res.json(entities);
    })
};

// TODO move from controller into a repository
exports.paginateVideo = function(req, res) {
  const options = {
    page: parseInt(req.params.id, 10),
    limit: pageSize
  };
  const query = {};
  if (req.query.category) {
    const reqCategories = req.query.category.split(',');
    query.category = {};
    query.category.$in = reqCategories;
    //query.category.$eq = req.query.category;
  }

  if (req.query.language) {
    const reqLanguages = req.query.language.split(',');
    query.language = {};
    query.language.$in = reqLanguages;
  }

  Video.paginate(query, options, function(err, result) {
    if (err) {
      res.send(err);
    }

    res.json(result);
  });
};

// TODO move from controller into a repository
exports.getVideo = function(req, res) {
    Video.findById(req.params.videoId, function(err, entity) {
        if (err)
            res.send(err);
        res.json(entity);
    });
};
