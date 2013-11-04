# global describe, beforeEach, assert, it

'use strict';
suite '<%= _.classify(name) %> Router', ->
  setup ->
    @<%= _.classify(name) %> = new <%= _.camelize(appname) %>.Routers.<%= _.classify(name) %>Router()
