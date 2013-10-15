'use strict';
var util = require('util');
var path = require('path');
var scriptBase = require('../script-base');

var BackboneMochaGenerator = module.exports = function (args, options, config) {
  scriptBase.apply(this, arguments);
  this.mkdir('test/models');
};

util.inherits(BackboneMochaGenerator, scriptBase);

BackboneMochaGenerator.prototype.createModel = function createModel() {
  var destFile = path.join(this.env.options.testPath, 'models', this.name + '-test' + this.ext);
  this.template( this.options.ui +'/model' + this.ext, destFile);
  this.addScriptToIndex('models/' + this.name);
};

