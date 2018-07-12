const https = require('https');
const API_KEY = process.env.API_KEY_YOUTUBE;
const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=__VIDEO_ID__&key=${API_KEY}`
module.exports = class YoutubeService {
  getData(videoId) {
    const realURL = url.replace('__VIDEO_ID__', videoId);
    return new Promise ((resolve, reject) => {
      https.get(realURL, res => {
        res.setEncoding("utf8");
        let body = "";

        res.on("data", data => {
          body += data;
        });

        res.on("end", () => {
          body = JSON.parse(body);
          if (!body.items.length) {
            reject('no items found');
          }
          resolve(body);
        });
      })
    });
  }
}