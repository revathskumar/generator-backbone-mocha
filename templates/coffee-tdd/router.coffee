# global beforeEach, describe, it, assert, expect

'use strict';
suite '<%= _.classify(name) %> Router', ->
  setup ->
    @<%= _.classify(name) %>Router = new <%= _.camelize(appname) %>.Routers.<%= _.classify(name) %>()
