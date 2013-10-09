'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var backboneUtils = require('./util.js');

var BackboneMochaGenerator = module.exports = function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  if (typeof this.env.options.testPath === 'undefined') {
    try {
      this.env.options.testPath = require(path.join(process.cwd(), 'bower.json')).appPath;
    } catch (err) {}
    this.env.options.testPath = this.env.options.testPath || 'test';
  }

  if (typeof this.env.options.coffee === 'undefined') {
    this.option('coffee');

    // attempt to detect if user is using CS or not
    // if cml arg provided, use that; else look for the existence of cs
    if (!this.options.coffee &&
      this.expandFiles(path.join(this.env.options.appPath, '/scripts/**/*.coffee'), {}).length > 0) {
      this.options.coffee = true;
    }

    this.env.options.coffee = this.options.coffee;
  }

  this.sourceRoot(path.join(__dirname, 'templates'));
};

util.inherits(BackboneMochaGenerator, yeoman.generators.NamedBase);


BackboneMochaGenerator.prototype.addScriptToIndex = function (script) {
  try {
    var testPath = this.env.options.testPath;
    var fullPath = path.join(testPath, 'index.html');

    backboneUtils.rewriteFile({
      file: fullPath,
      needle: '<!-- include spec files here... -->',
      splicable: [
        '<script src="test/' + script + '.js"></script>'
      ]
    });
  } catch (e) {
    console.log('\nUnable to find '.yellow + fullPath + '. Reference to '.yellow + script + '.js ' + 'not added.\n'.yellow);
  }
};
