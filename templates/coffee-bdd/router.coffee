# global describe, beforeEach, assert, it
"use strict"

describe '<%= _.classify(name) %> Router', ->
  beforeEach ->
    @<%= _.classify(name) %> = new <%= _.camelize(appname) %>.Routers.<%= _.classify(name) %>Router();

  it 'index route', ->

