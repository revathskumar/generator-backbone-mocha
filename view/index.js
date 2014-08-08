'use strict';
var scriptBase = require('../script-base');

var BackboneMochaViewGenerator  = scriptBase.extend({
  constructor: function () {
    scriptBase.apply(this, arguments);
  },

  initializing: function () {
    this.initialize('views');
  },

  writing: {
    createView: function () {
      this._writeTemplate('view');
    }
  }
});

module.exports = BackboneMochaViewGenerator;
