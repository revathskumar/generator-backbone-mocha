# global beforeEach, describe, it, assert, expect
"use strict"

describe '<%= _.classify(name) %> Collection', ->
  beforeEach ->
    @<%= _.classify(name) %>Collection = new <%= _.camelize(appname) %>.Collections.<%= _.classify(name) %>()
