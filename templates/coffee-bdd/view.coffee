# global describe, beforeEach, assert, it
"use strict"

describe '<%= _.classify(name) %> View', ->
  beforeEach ->
    @<%= _.classify(name) %> = new <%= _.camelize(appname) %>.Views.<%= _.classify(name) %>View();
