const Video = require('../models/video');

module.exports = class VideoFactory {
  create(youtubeData, yamlData = {}) {
    return new Video({
      _id: youtubeData.items[0].id.videoId,
      publishedAt: youtubeData.items[0].snippet.publishedAt,
      title: yamlData.title || youtubeData.items[0].snippet.title,
      description: yamlData.description || youtubeData.items[0].snippet.description,
      thumbnails: youtubeData.items[0].snippet.thumbnails,
      channelTitle: youtubeData.items[0].snippet.channelTitle,
      channelId: youtubeData.items[0].snippet.channelId,
      language: yamlData.language,
      tags: yamlData.tags,
      category: yamlData.category,
      status: yamlData.status
    });
  }
};