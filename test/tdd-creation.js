/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('backbone-mocha generator : tdd', function () {
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
      ], ['temp'], {ui: 'tdd'});
    this.model.run({}, function () {
      helpers.assertFiles([
        ['test/spec/models/temp-test.js',
        /suite\(\'Temp Model\'/]
      ]);
      done();
    });
  });

  it('creates collection', function(done){
    this.collection = helpers.createGenerator('backbone-mocha:collection', [
      '../../collection'
      ], ['temp'], {ui: 'tdd'});
    this.collection.run({}, function () {
      helpers.assertFiles([
        ['test/spec/collections/temp-test.js',
        /suite\(\'Temp Collection\'/]
      ]);
      done();
    });
  });

  it('creates view', function(done){
    this.view = helpers.createGenerator('backbone-mocha:view', [
      '../../view'
      ], ['temp'], {ui: 'tdd'});

    this.view.run({}, function () {
      helpers.assertFiles([
        ['test/spec/views/temp-test.js',
        /suite\(\'Temp View\'/]
      ]);
      done();
    });
  });

  it('creates router', function(done){
    this.router = helpers.createGenerator('backbone-mocha:router', [
      '../../router'
      ], ['temp'], {ui: 'tdd'});

    this.router.run({}, function () {
      helpers.assertFiles([
        ['test/spec/routers/temp-test.js',
        /suite\(\'Temp Router\'/]
      ]);
      done();
    });
  });
});
