/*global suite, test, assert, setup, bb  */
'use strict';

suite('<%= _.classify(name) %> Model', function () {

    setup(function () {
        this.<%= _.classify(name) %> = new <%= _.camelize(appname) %>.Models.<%= _.classify(name) %>Model();
    });

});
