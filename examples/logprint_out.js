'use strict';

var _index = require('../dist/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.silly('something silly');
_index2.default.debug('something debug');
_index2.default.verbose('something verbose');
_index2.default.http('some http');
_index2.default.info('some description info');
_index2.default.warn('some warning');
_index2.default.error('something wrong and will be exit');
