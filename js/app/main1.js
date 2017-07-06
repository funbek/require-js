define(function (require) {
  var
    $ = require('jquery'),
    lib = require('./lib'),
    data = require('./data');

  $(function() {
    var getBody = lib.getBody();
    getBody.append("<a href='second.html'>Link to second page</a>");

    data.getData();
  });
});
