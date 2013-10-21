/*global suite, test, assert, setup, bb  */
'use strict';

suite('<%= _.classify(name) %> View', function () {

    setup(function () {
        this.<%= _.classify(name) %> = new <%= _.camelize(appname) %>.Views.<%= _.classify(name) %>Views();
    });

});
