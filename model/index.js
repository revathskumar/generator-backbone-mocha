'use strict';
var scriptBase = require('../script-base');

var BackboneMochaModelGenerator = scriptBase.extend({
  constructor: function () {
    scriptBase.apply(this, arguments);
  },

  initializing: function () {
    this.initialize('models');
  },

  writing: {
    createModel: function () {
      this.writeTemplate('model');
    }
  }
});

module.exports = BackboneMochaModelGenerator;
