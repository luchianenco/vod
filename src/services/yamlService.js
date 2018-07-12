'use strict';
const yaml = require('js-yaml');
const fs   = require('fs');

module.exports = class YamlService {
  getData(fileName) {
    if (!fileName) {
      console.log('File name is required');
      process.exit(1);
    }
    // Get document, or throw exception on error
    try {
      return yaml.safeLoad(
          fs.readFileSync(fileName, 'utf8')
      );
    } catch (e) {
      console.log(e);
      process.exit(1);
    }
  }
};
