'use strict';
var util = require('util');
var path = require('path');
var scriptBase = require('../script-base');

var BackboneMochaGenerator = module.exports = function (args, options, config) {
  scriptBase.apply(this, arguments);

  this.mkdir('test/spec/collections');
  this.destFile = path.join(this.env.options.testPath, 'spec/collections', this.fileName());
};

util.inherits(BackboneMochaGenerator, scriptBase);

BackboneMochaGenerator.prototype.createCollection = function createCollection() {
  if (this.options.coffee) {
    return;
  }

  this.template(this.options.ui + '/collection' + this.ext, this.destFile);
  this.addScriptToIndex('collections/' + this.name);
};

BackboneMochaGenerator.prototype.createCollectionCoffee = function createCollectionCoffee() {
  if (!this.options.coffee) {
    return;
  }

  this.template('coffee-' + this.options.ui + '/collection' + this.ext, this.destFile);
  this.addScriptToIndex('collections/' + this.name);
};
