# global describe, beforeEach, assert, it

'use strict';
suite '<%= _.classify(name) %> Collection', ->
  setup ->
    @<%= _.classify(name) %> = new <%= _.camelize(appname) %>.Collections.<%= _.classify(name) %>Collection()
