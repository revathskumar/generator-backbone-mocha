# global beforeEach, describe, it, assert, expect
"use strict"

describe '<%= _.classify(name) %> Model', ->
  beforeEach ->
    @<%= _.classify(name) %> = new <%= _.camelize(appname) %>.Models.<%= _.classify(name) %>Model();
