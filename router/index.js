'use strict';
var scriptBase = require('../script-base');

var BackboneMochaRouterGenerator = scriptBase.extend({
  constructor: function () {
    scriptBase.apply(this, arguments);
  },

  initializing: function () {
    this.initialize('routers');
  },

  writing: {
    createRouter: function () {
      this._writeTemplate('router');
    }
  }
});

module.exports = BackboneMochaRouterGenerator;
