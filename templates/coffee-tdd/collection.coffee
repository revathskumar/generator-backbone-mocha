# global beforeEach, describe, it, assert, expect

'use strict';
suite '<%= _.classify(name) %> Collection', ->
  setup ->
    @<%= _.classify(name) %>Collection = new <%= _.camelize(appname) %>.Collections.<%= _.classify(name) %>()
