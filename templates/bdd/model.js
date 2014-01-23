/*global beforeEach, describe, it, assert, expect  */
'use strict';

describe('<%= _.classify(name) %> Model', function () {

    beforeEach(function () {
        this.<%= _.classify(name) %>Model = new <%= _.camelize(appname) %>.Models.<%= _.classify(name) %>();
    });

});
