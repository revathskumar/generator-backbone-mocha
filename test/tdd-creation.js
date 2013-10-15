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
        ], ['temp']);
        this.model.options.ui = 'bdd'
        this.model.run({}, function () {
            helpers.assertFiles(['test/models/temp-test.js']);
            done();
        });
    });

    it('creates collection', function(done){
        this.collection = helpers.createGenerator('backbone-mocha:collection', [
            '../../collection'
        ], ['temp']);
        this.collection.options.ui = 'bdd'
        this.collection.run({}, function () {
            helpers.assertFiles(['test/collections/temp-test.js']);
            done();
        });
    })
});
