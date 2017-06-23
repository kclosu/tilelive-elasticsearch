'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ElasticSearchSource = function () {
  function ElasticSearchSource(uri, callback) {
    _classCallCheck(this, ElasticSearchSource);

    callback(null, this);
  }

  _createClass(ElasticSearchSource, [{
    key: 'getInfo',
    value: function getInfo(callback) {
      callback(null, {});
    }
  }, {
    key: 'getTile',
    value: function getTile(z, x, y, callback) {
      callback(null);
    }
  }]);

  return ElasticSearchSource;
}();

ElasticSearchSource.registerProtocols = function (tilelive) {
  tilelive.protocols['elasticsearch:'] = ElasticSearchSource;
};

exports.default = ElasticSearchSource;
module.exports = exports['default'];
//# sourceMappingURL=tilelive-elasticsearch.js.map