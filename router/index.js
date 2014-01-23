'use strict';
var util = require('util');
var path = require('path');
var scriptBase = require('../script-base');

var BackboneMochaGenerator = module.exports = function (args, options, config) {
  scriptBase.apply(this, arguments);
  this.mkdir('test/spec/routers');

  this.destFile = path.join(this.env.options.testPath, 'spec/routers', this.fileName());
};

util.inherits(BackboneMochaGenerator, scriptBase);

BackboneMochaGenerator.prototype.createRouter = function createRouter() {
  if (this.options.coffee) {
    return;
  }

  this.template(this.options.ui + '/router' + this.ext, this.destFile);
  this.addScriptToIndex('routers/' + this.name);
};

BackboneMochaGenerator.prototype.createRouterCoffee = function createRouterCoffee() {
  if (!this.options.coffee) {
    return;
  }

  this.template('coffee-' + this.options.ui + '/router' + this.ext, this.destFile);
  this.addScriptToIndex('routers/' + this.name);
};
