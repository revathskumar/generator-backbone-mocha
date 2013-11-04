# global describe, beforeEach, assert, it

'use strict';
suite '<%= _.classify(name) %> View', ->
  setup ->
    @<%= _.classify(name) %> = new <%= _.camelize(appname) %>.Views.<%= _.classify(name) %>View()
