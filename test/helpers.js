'use strict';
var path    = require('path');
var yeoman = require('yeoman-generator');
var helpers = yeoman.test;

exports.runner = function (type, options, assertion) {
  helpers.run(path.join(__dirname, '../' + type))
    .inDir(path.join(__dirname, 'temp'))
    .withArguments(['temp'])
    .withOptions(options)
    .on('end', assertion);
};
