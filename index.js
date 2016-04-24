'use strict';

var randomALtitude  = require('random-altitude');
var randomLatitude  = require('random-latitude');
var randomLongitude = require('random-longitude');

module.exports = function (fixed) {

  var options = { fixed: fixed };

  return randomLatitude(options) + ', ' + randomLongitude(options) + ', ' + randomALtitude(options);
};
