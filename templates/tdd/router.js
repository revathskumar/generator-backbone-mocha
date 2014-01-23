/*global suite, test, assert, setup, bb  */
'use strict';

suite('<%= _.classify(name) %> Router', function () {

    setup(function () {
        this.<%= _.classify(name) %>Router = new <%= _.camelize(appname) %>.Routers.<%= _.classify(name) %>();
    });

});
