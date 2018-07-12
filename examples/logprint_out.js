'use strict';

var _dist = require('../dist');

var _dist2 = _interopRequireDefault(_dist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dist2.default.silly('something silly');
_dist2.default.debug('something debug');
_dist2.default.verbose('something verbose');
_dist2.default.http('some http');
_dist2.default.info('some description info');
_dist2.default.warn('some warning');
_dist2.default.error('something wrong and will be exit');
