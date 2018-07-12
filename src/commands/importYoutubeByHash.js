'use strict';
if (!process.env.API_KEY_YOUTUBE) {
  throw new Error('API Key cannot be empty');
}

require('../clients/mongoClient');
const YoutubeService = require('../services/youtubeService');
const VideoFactory = require('../factory/videoFactory');
const videoId = process.argv[2];

const Video = require('../models/video');
const service = new YoutubeService();
const factory = new VideoFactory();

service.getData(videoId)
  .then(res => {
    const entity = factory.create(res);
    Video.findOneAndUpdate({_id: entity._id}, entity, {upsert: true}, function(err, res) {
      if (err) {
        throw err;
      }

      console.log(`Entity ${entity._id} has been created!`);
      process.exit(0);
    })
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  })
;
