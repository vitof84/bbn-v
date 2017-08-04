module.exports = function(cfg){
  var path = require('path');
  var fs = require('fs');
  var bundle = path.join(__dirname, "/elaborate/building.js")

 require(bundle)(cfg);
}
