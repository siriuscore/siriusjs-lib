var siriusjs = require('bitcoinjs-lib');

Object.assign(siriusjs.networks, require('./networks'));

siriusjs.utils = require('./utils');

module.exports = siriusjs;