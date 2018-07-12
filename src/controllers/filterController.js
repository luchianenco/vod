'use strict';
const mongoose = require('mongoose');
const Video = mongoose.model('video');

// TODO move from controller into a repository
exports.getFilters = function (req, res) {
  const facet = {

    categories: [
      {$unwind: '$category'},
      {$group: { _id: '$category', count: {$sum: 1}}},
      { $sort: { "count": -1 } },
    ],
    channels: [
      {$group: {_id: "$channelTitle", count: { $sum: 1 }}},
      { $sort: { "count": -1 } }
    ],
    languages: [
      {$group: {_id: "$language", count: { $sum: 1 }}},
      { $sort: { "count": -1 } }
    ],
    tags: [
      {$unwind: '$tags'},
      {$group: { _id: '$tags', count: {$sum: 1}}},
      { $sort: { "count": -1 } },
    ],
    years: [
      {$group: { _id: { year: { $year: '$publishedAt'}}, count: {$sum: 1}}},
      { $sort: { "count": -1 } },
    ],
  };

  Video.aggregate().facet(facet).exec(function(err, result) {
    if (err) {
      res.send(err);
    }

    if (result[0]) {
      result = result[0];
    }

    res.json(result);
  });
};
