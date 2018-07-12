'use strict';
if (!process.env.API_KEY_YOUTUBE) {
  throw new Error('API Key cannot be empty');
}

const fileName = process.argv[2];
const API_KEY = process.env.API_KEY_YOUTUBE;
const YamlService = require('../services/yamlService');
const YoutubeService = require('../services/youtubeService');
const VideoFactory = require('../factory/videoFactory');

require('../clients/mongoClient');
const Video = require('../models/video');
const yamlService = new YamlService();
const youtubeService = new YoutubeService();
const factory = new VideoFactory();

const fileData = yamlService.getData(fileName);
youtubeService.getData(fileData.id)
.then(res => {
  const entity = factory.create(res, fileData);
  Video.findOneAndUpdate({_id: entity._id}, entity, {upsert: true}, function(err, res) {
    if (err) {
      throw err;
    }

    console.log(`Entity ${entity._id} has been created/updated!`);
    process.exit(0);
  })
})
.catch(err => {
  console.log(err);
  process.exit(1);
})
;
