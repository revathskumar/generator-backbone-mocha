# global beforeEach, describe, it, assert, expect

'use strict';
suite '<%= _.classify(name) %> View', ->
  setup ->
    @<%= _.classify(name) %>View = new <%= _.camelize(appname) %>.Views.<%= _.classify(name) %>()
