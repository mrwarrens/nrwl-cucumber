'use strict';

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

module.exports = {
  setup: function() {
    try {

      chai.use(chaiAsPromised);

    } catch (e) {
      return browser.quit().then(function () {
        return process.exit(e);
      });
    }
  },

  name: 'core'
};
