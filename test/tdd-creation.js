/*global describe, it*/
'use strict';
var yeoman = require('yeoman-generator');
var assert  = yeoman.assert;
var test = require('./helpers');


describe('backbone-mocha generator : tdd', function () {
  it('creates model', function (done) {
    test.runner('model', {ui: 'tdd'}, function () {
      assert.fileContent([
        ['test/models/temp-test.js',
        /suite\(\'Temp Model\'/]
      ]);
      done();
    });
  });

  it('creates collection', function (done) {
    test.runner('collection', {ui: 'tdd'}, function () {
      assert.fileContent([
        ['test/collections/temp-test.js',
        /suite\(\'Temp Collection\'/]
      ]);
      done();
    });
  });

  it('creates view', function (done) {
    test.runner('view', {ui: 'tdd'}, function () {
      assert.fileContent([
        ['test/views/temp-test.js',
        /suite\(\'Temp View\'/]
      ]);
      done();
    });
  });

  it('creates router', function (done) {
    test.runner('router', {ui: 'tdd'}, function () {
      assert.fileContent([
        ['test/routers/temp-test.js',
        /suite\(\'Temp Router\'/]
      ]);
      done();
    });
  });
});
