'use strict';
module.exports = function (app) {
  const controller = require('../controllers/filterController');

  // Filters
  app.route('/filters')
    .get(controller.getFilters)
  ;
};