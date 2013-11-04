# global describe, beforeEach, assert, it
"use strict"

describe '<%= _.classify(name) %> Collection', ->
  beforeEach ->
    @<%= _.classify(name) %> = new <%= _.camelize(appname) %>.Collections.<%= _.classify(name) %>Collection()
