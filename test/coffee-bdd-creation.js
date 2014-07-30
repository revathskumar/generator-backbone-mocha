/*global describe, it*/
'use strict';
var yeoman = require('yeoman-generator');
var assert  = yeoman.assert;
var test = require('./helpers');

describe('backbone-mocha generator : BDD : CoffeeScript', function () {
  it('creates model', function (done) {
    test.runner('model', {ui: 'bdd', coffee: true}, function () {
      assert.fileContent([
        ['test/models/temp.spec.coffee',
        /describe \'Temp Model\', ->/]
      ]);
      done();
    });
  });

  it('creates collection', function (done) {
    test.runner('collection', {ui: 'bdd', coffee: true}, function () {
      assert.fileContent([
        ['test/collections/temp.spec.coffee',
          /describe \'Temp Collection\', ->/]
      ]);
      done();
    });
  });

  it('creates view', function (done) {
    test.runner('view', {ui: 'bdd', coffee: true}, function () {
      assert.fileContent([
        ['test/views/temp.spec.coffee',
        /describe \'Temp View\', ->/]
      ]);
      done();
    });
  });

  it('creates router', function (done) {
    test.runner('router', {ui: 'bdd', coffee: true}, function () {
      assert.fileContent([
        ['test/routers/temp.spec.coffee',
        /describe \'Temp Router\', ->/]
      ]);
      done();
    });
  });
});
