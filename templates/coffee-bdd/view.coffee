# global beforeEach, describe, it, assert, expect
"use strict"

describe '<%= _.classify(name) %> View', ->
  beforeEach ->
    @<%= _.classify(name) %> = new <%= _.camelize(appname) %>.Views.<%= _.classify(name) %>View();
