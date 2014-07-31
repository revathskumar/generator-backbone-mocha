/*global describe, it*/
'use strict';
var yeoman = require('yeoman-generator');
var assert  = yeoman.assert;
var test = require('./helpers');

describe('backbone-mocha generator : tdd', function () {
  it('creates collection', function (done) {
    test.runner('collection', {ui: 'tdd', coffee: true}, function () {
      assert.fileContent([
        ['test/collections/temp-test.coffee',
        /suite \'Temp Collection\', ->/]
      ]);
      done();
    });
  });

  it('creates model', function (done) {
    test.runner('model', {ui: 'tdd', coffee: true}, function () {
      assert.fileContent([
        ['test/models/temp-test.coffee',
        /suite \'Temp Model\', ->/]
      ]);
      done();
    });
  });

  it('creates router', function (done) {
    test.runner('router', {ui: 'tdd', coffee: true}, function () {
      assert.fileContent([
        ['test/routers/temp-test.coffee',
        /suite \'Temp Router\', ->/]
      ]);
      done();
    });
  });

  it('creates view', function (done) {
    test.runner('view', {ui: 'tdd', coffee: true}, function () {
      assert.fileContent([
        ['test/views/temp-test.coffee',
        /suite \'Temp View\', ->/]
      ]);
      done();
    });
  });
});
