'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var backboneUtils = require('./util.js');

var BackboneMochaGenerator = yeoman.generators.NamedBase.extend({
  constructor: function () {
    yeoman.generators.NamedBase.apply(this, arguments);

    try {
      this.appname = require(path.join(process.cwd(), '.yo-rc.json'))['generator-backbone'].appName;
    } catch (e) {
      this.appname = path.basename(process.cwd());
    }

    this.option('ui', {
      desc: 'Choose your style of DSL (bdd, tdd, qunit, or exports)',
      type: String,
      defaults: 'bdd'
    });

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
        this.expandFiles(path.join(this.env.options.testPath, '**/*.coffee'), {}).length > 0) {
        this.options.coffee = true;
      }

      this.env.options.coffee = this.options.coffee;
    }

    this.ext = '.js';
    if (this.env.options.coffee) {
      this.ext = '.coffee';
    }

    this.specExt = '-test';
    if (this.options.ui === 'bdd') {
      this.specExt = '.spec';
    }

    this.sourceRoot(path.join(__dirname, 'templates'));

    this._.mixin({ 'classify': backboneUtils.classify });
  },

  addScriptToIndex: function (script) {
    try {
      var testPath = this.env.options.testPath;
      var fullPath = path.join(testPath, 'index.html');

      backboneUtils.rewriteFile({
        file: fullPath,
        needle: '<!-- include spec files here... -->',
        splicable: [
          '<script src="' + script + '.js"></script>'
        ]
      });
    } catch (e) {
      console.log('\nUnable to find ' + fullPath + '. Reference to ' + script + '.js ' + 'not added.\n');
    }
  },

  fileName: function () {
    return this.name + this.specExt + this.ext;
  },

  initialize: function (type) {
    this.mkdir('test/' + type);
    this.destFile = path.join('test/'  + type, this.fileName());
  },

  writeTemplate: function (type) {
    var prefix = '';
    if (this.options.coffee) {
      prefix = 'coffee-';
    }
    this.template(prefix + this.options.ui + '/' + type + this.ext, this.destFile);
    this.addScriptToIndex(type + 's/' +  this.fileName());
  },
});

module.exports = BackboneMochaGenerator;
