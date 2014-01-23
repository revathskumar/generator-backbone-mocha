'use strict';
var util = require('util');
var path = require('path');
var scriptBase = require('../script-base');

var BackboneMochaGenerator = module.exports = function (args, options, config) {
  scriptBase.apply(this, arguments);

  this.mkdir('test/spec/views');

  this.destFile = path.join('test/spec/views', this.fileName());
};

util.inherits(BackboneMochaGenerator, scriptBase);

BackboneMochaGenerator.prototype.createView = function createModel() {
  if (this.options.coffee) {
    return;
  }

  this.template(this.options.ui + '/view' + this.ext, this.destFile);
  this.addScriptToIndex('views/' + this.name);
};

BackboneMochaGenerator.prototype.createViewCoffee = function createViewCoffee() {
  if (!this.options.coffee) {
    return;
  }

  this.template('coffee-' + this.options.ui + '/view' + this.ext, this.destFile);
  this.addScriptToIndex('views/' + this.name);
};
