const { series } = require('gulp');
var log = require('fancy-log');

function javascript(cb) {
    log('From javascript task');

  // body omitted
  cb();
}

function css(cb) {
    log('From css task');

  // body omitted
  cb();
}

exports.default = series(javascript, css);