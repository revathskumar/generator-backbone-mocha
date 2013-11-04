'use strict';
var util = require('util');
var path = require('path');
var scriptBase = require('../script-base');

var BackboneMochaGenerator = module.exports = function (args, options, config) {
  scriptBase.apply(this, arguments);
  this.mkdir('test/models');

  this.destFile = path.join(this.env.options.testPath, 'models', this.fileName());
};

util.inherits(BackboneMochaGenerator, scriptBase);

BackboneMochaGenerator.prototype.createModel = function createModel() {
  if (this.options.coffee) {
    return;
  }

  this.template(this.options.ui + '/model' + this.ext, this.destFile);
  this.addScriptToIndex('models/' + this.name);
};

BackboneMochaGenerator.prototype.createModelCoffee = function createModelCoffee() {
  if (!this.options.coffee) {
    return;
  }

  this.template('coffee-' + this.options.ui + '/model' + this.ext, this.destFile);
  this.addScriptToIndex('models/' + this.name);
};
