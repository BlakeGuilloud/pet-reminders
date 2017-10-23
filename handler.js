'use strict';

const sendMessage = require('./message');
const {
  handleError,
  handleSuccess,
} = require('./helpers');

module.exports.run = (event, context, callback) => {
  console.log('imported yo');
    return sendMessage()
      .then((data) => {
        console.log('DATA', data);
        return data;
      })
      .then(message => callback(null, handleSuccess(message)))
      .catch(err => callback(null, handleError(err)));
};