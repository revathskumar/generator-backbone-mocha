'use strict';
var util = require('util');
var path = require('path');
var scriptBase = require('../script-base');

var BackboneMochaGenerator = module.exports = function (args, options, config) {
  scriptBase.apply(this, arguments);
  this.mkdir('test/routers');
};

util.inherits(BackboneMochaGenerator, scriptBase);

BackboneMochaGenerator.prototype.createRouter = function createModel() {
  var destFile = path.join(this.env.options.testPath, 'routers', this.fileName());
  this.template( this.options.ui +'/router' + this.ext, destFile);
  this.addScriptToIndex('routers/' + this.name);
};
