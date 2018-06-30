'use strict';
const https = require("https");

const API_KEY = process.env.API_KEY_YOUTUBE;
const videoId = process.argv[2];

if (!API_KEY) {
    throw new Error('API Key cannot be empty');
}

require('../clients/mongoClient');
const Video = require('../models/video');

const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${videoId}&key=${API_KEY}`
https.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
        body += data;
    });
    res.on("end", () => {
        body = JSON.parse(body);
        //if (!body.items.length || typeof body.items[0] !== "undefined") {
        //    return;
        //}

        const entity = new Video({
            youtubeVideoId: body.items[0].id.videoId,
            publishedAt: body.items[0].snippet.publishedAt,
            title: body.items[0].snippet.title,
            description: body.items[0].snippet.description,
            thumbnails: body.items[0].snippet.thumbnails,
            channelTitle: body.items[0].snippet.channelTitle,
            channelId: body.items[0].snippet.channelId
        });
        console.log(entity);

        entity.save(function(err, entity) {
            if (err) {
                console.log(err);
            }
            console.log(entity);
        });

        return;
    });
});