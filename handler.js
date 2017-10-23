'use strict';

const sendMessage = require('./message');
const {
  handleError,
  handleSuccess,
} = require('./helpers');

module.exports.run = (event, context, callback) => {
    return sendMessage()
      .then(message => callback(null, handleSuccess(message)))
      .catch(err => callback(null, handleError(err)));
};