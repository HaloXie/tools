/**
 * md5 加密
 * @param {String} content 明文
 */

const crypto = require('crypto');
const _ = require('lodash');

function _md5(content) {
  const md5 = crypto.createHash('md5');
  return md5.update(content).digest('hex');
}

function _getModelByDeviceId(deviceId) {
  const upDeviceId = _.upperCase(deviceId);
  const hex = _md5(upDeviceId)[0];
  return hex;
}

const deviceId = process.argv[2];
console.log(_getModelByDeviceId(deviceId));
