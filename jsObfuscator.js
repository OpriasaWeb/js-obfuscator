var JavaScriptObfuscator = require('javascript-obfuscator');

var obfuscationResult = JavaScriptObfuscator.obfuscate(
  `
      (function(){
          var variable1 = '5' - 3;
          var variable2 = '5' + 3;
          var variable3 = '5' + - '2';
          var variable4 = ['10','10','10','10','10'].map(parseInt);
          var variable5 = 'foo ' + 1 + 1;
          console.log(variable1);
          console.log(variable2);
          console.log(variable3);
          console.log(variable4);
          console.log(variable5);
      })();
  `,
  {
      compact: false,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 1,
      numbersToExpressions: true,
      simplify: true,
      stringArrayShuffle: true,
      splitStrings: true,
      stringArrayThreshold: 1
  }
);

console.log(obfuscationResult.getObfuscatedCode());
/*
var _0x9947 = [
  'map',
  'log',
  'foo\x20',
  'bvmqO',
  '133039ViRMWR',
  'xPfLC',
  'ytpdx',
  '1243717qSZCyh',
  '2|7|4|6|9|',
  '1ErtbCr',
  '1608314VKvthn',
  '1ZRaFKN',
  'XBoAA',
  '423266kQOYHV',
  '3|0|5|8|1',
  '235064xPNdKe',
  '13RUDZfG',
  '157gNPQGm',
  '1639212MvnHZL',
  'rDjOa',
  'iBHph',
  '9926iRHoRl',
  'split'
];
function _0x33e4(_0x1809b5, _0x37ef6e) {
  return _0x33e4 = function (_0x338a69, _0x39ad79) {
      _0x338a69 = _0x338a69 - (0x1939 + -0xf * 0x1f3 + 0x1 * 0x469);
      var _0x2b223a = _0x9947[_0x338a69];
      return _0x2b223a;
  }, _0x33e4(_0x1809b5, _0x37ef6e);
}
(function (_0x431d87, _0x156c7f) {
  var _0x10cf6e = _0x33e4;
  while (!![]) {
      try {
          var _0x330ad1 = -parseInt(_0x10cf6e(0x6c)) * -parseInt(_0x10cf6e(0x6d)) + -parseInt(_0x10cf6e(0x74)) * -parseInt(_0x10cf6e(0x78)) + parseInt(_0x10cf6e(0x6a)) + -parseInt(_0x10cf6e(0x70)) + parseInt(_0x10cf6e(0x6e)) * -parseInt(_0x10cf6e(0x75)) + parseInt(_0x10cf6e(0x72)) + -parseInt(_0x10cf6e(0x67)) * parseInt(_0x10cf6e(0x73));
          if (_0x330ad1 === _0x156c7f)
              break;
          else
              _0x431d87['push'](_0x431d87['shift']());
      } catch (_0x9f878) {
          _0x431d87['push'](_0x431d87['shift']());
      }
  }
}(_0x9947, -0xb6270 + 0x4dfd2 * 0x2 + 0x75460 * 0x2), function () {
  var _0x1f346d = _0x33e4, _0x860db8 = {
          'ytpdx': _0x1f346d(0x6b) + _0x1f346d(0x71),
          'bvmqO': function (_0x560787, _0x519b9e) {
              return _0x560787 - _0x519b9e;
          },
          'rDjOa': function (_0x4501fe, _0x2b07a3) {
              return _0x4501fe + _0x2b07a3;
          },
          'xPfLC': function (_0x5f3c9b, _0x434936) {
              return _0x5f3c9b + _0x434936;
          },
          'XBoAA': function (_0x535b8a, _0x42eef4) {
              return _0x535b8a + _0x42eef4;
          },
          'iBHph': _0x1f346d(0x65)
      }, _0x346c55 = _0x860db8[_0x1f346d(0x69)][_0x1f346d(0x79)]('|'), _0x3bf817 = 0x4bb * 0x1 + 0x801 + -0xcbc;
  while (!![]) {
      switch (_0x346c55[_0x3bf817++]) {
      case '0':
          console[_0x1f346d(0x7b)](_0x4c96d8);
          continue;
      case '1':
          console[_0x1f346d(0x7b)](_0x101028);
          continue;
      case '2':
          var _0x65977d = _0x860db8[_0x1f346d(0x66)]('5', -0x586 + -0x2195 + -0x6 * -0x685);
          continue;
      case '3':
          console[_0x1f346d(0x7b)](_0x65977d);
          continue;
      case '4':
          var _0x56d39b = _0x860db8[_0x1f346d(0x76)]('5', -'2');
          continue;
      case '5':
          console[_0x1f346d(0x7b)](_0x56d39b);
          continue;
      case '6':
          var _0x544285 = [
              '10',
              '10',
              '10',
              '10',
              '10'
          ][_0x1f346d(0x7a)](parseInt);
          continue;
      case '7':
          var _0x4c96d8 = _0x860db8[_0x1f346d(0x68)]('5', 0x622 * -0x6 + 0x4a * 0x3 + 0x1 * 0x23f1);
          continue;
      case '8':
          console[_0x1f346d(0x7b)](_0x544285);
          continue;
      case '9':
          var _0x101028 = _0x860db8[_0x1f346d(0x6f)](_0x860db8[_0x1f346d(0x6f)](_0x860db8[_0x1f346d(0x77)], 0x6fb * 0x5 + 0x1ebf * 0x1 + -0x41a5), 0x209 * 0xa + 0x1314 + -0x276d);
          continue;
      }
      break;
  }
}());
*/