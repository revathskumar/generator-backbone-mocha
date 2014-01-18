# global beforeEach, describe, it, assert, expect

'use strict';
suite '<%= _.classify(name) %> Router', ->
  setup ->
    @<%= _.classify(name) %> = new <%= _.camelize(appname) %>.Routers.<%= _.classify(name) %>Router()
