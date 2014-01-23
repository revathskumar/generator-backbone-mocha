# global beforeEach, describe, it, assert, expect
"use strict"

describe '<%= _.classify(name) %> View', ->
  beforeEach ->
    @<%= _.classify(name) %>View = new <%= _.camelize(appname) %>.Views.<%= _.classify(name) %>();
