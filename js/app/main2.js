define(function (require) {
  var
    $ = require('jquery'),
    lib = require('./lib');

  $(function() {
    $('body').append("<a href='index.html'>Link to first page</a>")
  });
});
