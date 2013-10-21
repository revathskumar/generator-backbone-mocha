'use strict';
var util = require('util');
var path = require('path');
var scriptBase = require('../script-base');

var BackboneMochaGenerator = module.exports = function (args, options, config) {
  scriptBase.apply(this, arguments);

  this.mkdir('test/views');
};

util.inherits(BackboneMochaGenerator, scriptBase);

BackboneMochaGenerator.prototype.createView = function createModel() {
  var destFile = path.join('test/views', this.fileName());
  this.template(this.options.ui + '/view' + this.ext, destFile);
  this.addScriptToIndex('views/' + this.name);
};
