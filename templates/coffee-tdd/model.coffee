# global describe, beforeEach, assert, it

'use strict';
suite '<%= _.classify(name) %> Model', ->
  setup ->
    @<%= _.classify(name) %> = new <%= _.camelize(appname) %>.Models.<%= _.classify(name) %>Model()
