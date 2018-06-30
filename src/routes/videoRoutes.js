'use strict';
module.exports = function (app) {
    const controller = require('../controllers/videoController');

    // Video Routes
    app.route('/video')
        .get(controller.listLastVideos)
    ;

    app.route('/video/:videoId')
        .get(controller.getVideo)
};