'use strict';
var util = require('util');
var path = require('path');
var scriptBase = require('../script-base');

var BackboneMochaGenerator = module.exports = function (args, options, config) {
  scriptBase.apply(this, arguments);

  this.mkdir('test/collections');
};

util.inherits(BackboneMochaGenerator, scriptBase);

BackboneMochaGenerator.prototype.createModel = function createModel() {
  var ext = '.js';
  var destFile = path.join('test/collections', this.name + '-test' + ext);
  this.template('collection' + ext, destFile);
  this.addScriptToIndex('collections/' + this.name);
};

