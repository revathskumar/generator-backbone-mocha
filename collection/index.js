'use strict';
var util = require('util');
var path = require('path');
var scriptBase = require('../script-base');

var BackboneMochaGenerator = module.exports = function (args, options, config) {
  scriptBase.apply(this, arguments);

  this.mkdir('test/collections');
};

util.inherits(BackboneMochaGenerator, scriptBase);

BackboneMochaGenerator.prototype.createCollection = function createModel() {
  var destFile = path.join('test/collections', this.fileName());
  this.template(this.options.ui + '/collection' + this.ext, destFile);
  this.addScriptToIndex('collections/' + this.name);
};

