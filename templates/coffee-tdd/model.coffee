# global beforeEach, describe, it, assert, expect

'use strict';
suite '<%= _.classify(name) %> Model', ->
  setup ->
    @<%= _.classify(name) %>Model = new <%= _.camelize(appname) %>.Models.<%= _.classify(name) %>()
