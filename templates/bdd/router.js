/*global beforeEach, describe, it, assert, expect  */
'use strict';

describe('<%= _.classify(name) %> Router', function () {

    beforeEach(function () {
        this.<%= _.classify(name) %> = new <%= _.camelize(appname) %>.Routers.<%= _.classify(name) %>Router();
    });

    it('index route', function(){

    });

});
