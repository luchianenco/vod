'use strict';
module.exports = function (app) {
    const controller = require('../controllers/videoController');

    // Video Routes
    app.route('/lastVideos')
      .get(controller.listLastVideos)
    ;

    app.route('/page/:id')
      .get(controller.paginateVideo)
    ;

    app.route('/video/:videoId')
      .get(controller.getVideo)
    ;
};