/*global beforeEach, describe, it, assert, expect  */
'use strict';

describe('<%= _.classify(name) %> View', function () {

    beforeEach(function () {
        this.<%= _.classify(name) %> = new <%= _.camelize(appname) %>.Views.<%= _.classify(name) %>View();
    });

});
