/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;

describe('backbone-mocha generator : BDD : CoffeeScript', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      done();
    }.bind(this));
  });

  it('creates model', function (done) {
    this.model = helpers.createGenerator('backbone-mocha:model', [
      '../../model'
    ], ['temp'], {ui: 'bdd', coffee: true});

    this.model.run({}, function () {
      helpers.assertFiles([
        ['test/models/temp.spec.coffee',
        /describe \'Temp Model\', ->/]
      ]);
      done();
    });
  });

  it('creates collection', function (done) {
    this.collection = helpers.createGenerator('backbone-mocha:collection', [
      '../../collection'
    ], ['temp'], {ui: 'bdd', coffee: true});

    this.collection.run({}, function () {
      helpers.assertFiles([
        ['test/collections/temp.spec.coffee',
          /describe \'Temp Collection\', ->/]
      ]);
      done();
    });
  });

  it('creates view', function (done) {
    this.view = helpers.createGenerator('backbone-mocha:view', [
      '../../view'
    ], ['temp'], {ui: 'bdd', coffee: true});

    this.view.run({}, function () {
      helpers.assertFiles([
        ['test/views/temp.spec.coffee',
        /describe \'Temp View\', ->/]
      ]);
      done();
    });
  });

  it('creates router', function (done) {
    this.router = helpers.createGenerator('backbone-mocha:router', [
      '../../router'
    ], ['temp'], {ui: 'bdd', coffee: true});

    this.router.run({}, function () {
      helpers.assertFiles([
        ['test/routers/temp.spec.coffee',
        /describe \'Temp Router\', ->/]
      ]);
      done();
    });
  });
});
