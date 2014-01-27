/*global beforeEach, describe, it, assert, expect  */
'use strict';

describe('<%= _.classify(name) %> Router', function () {

    beforeEach(function () {
        this.<%= _.classify(name) %>Router = new <%= _.camelize(appname) %>.Routers.<%= _.classify(name) %>();
    });

    it('index route', function(){

    });

});
