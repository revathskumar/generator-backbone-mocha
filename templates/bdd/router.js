/*global describe, beforeEach, assert, it  */
'use strict';

describe('<%= _.classify(name) %> Router', function () {

    beforeEach(function () {
        this.<%= _.classify(name) %> = new <%= _.camelize(appname) %>.Routers.<%= _.classify(name) %>Router();
    });

    it('index route', function(){

    });

});
