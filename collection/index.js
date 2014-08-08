'use strict';
var scriptBase = require('../script-base');

var BackboneMochaCollectionGenerator = scriptBase.extend({
  constructor: function () {
    scriptBase.apply(this, arguments);
  },

  initializing: function () {
    this.initialize('collections');
  },

  writing: {
    createCollection: function () {
      this._writeTemplate('collection');
    }
  }
});

module.exports = BackboneMochaCollectionGenerator;
