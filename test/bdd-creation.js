/*global describe, it*/
'use strict';
var yeoman = require('yeoman-generator');
var assert  = yeoman.assert;
var test = require('./helpers');

describe('backbone-mocha generator : BDD', function () {
  it('creates model', function (done) {
    test.runner('model', {ui: 'bdd'}, function () {
      assert.fileContent([
        ['test/models/temp.spec.js',
        /describe\(\'Temp Model\'/]
      ]);
      done();
    });
  });

  it('creates collection', function (done) {
    test.runner('collection', {ui: 'bdd'},  function () {
      assert.fileContent([
        ['test/collections/temp.spec.js',
        /describe\(\'Temp Collection\'/]
      ]);
      done();
    });
  });

  it('creates view', function (done) {
    test.runner('view', {ui: 'bdd'}, function () {
      assert.fileContent([
        ['test/views/temp.spec.js',
        /describe\(\'Temp View\'/]
      ]);
      done();
    });
  });

  it('creates router', function (done) {
    test.runner('router', {ui: 'bdd'}, function () {
      assert.fileContent([
        ['test/routers/temp.spec.js',
        /describe\(\'Temp Router\'/]
      ]);
      done();
    });
  });
});
