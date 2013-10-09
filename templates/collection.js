/*global suite, test, assert, setup, bb  */
'use strict';

suite('<%= _.classify(name) %> Collection', function () {

    setup(function () {
        this.<%= _.classify(name) %> = new <%= _.camelize(appname) %>.Collections.<%= _.classify(name) %>Collection();
    });

});
