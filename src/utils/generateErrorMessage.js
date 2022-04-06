'use strict';

import createError from 'http-errors';

function generateErrorMessage(errorsArray, additionalMessage) {
  let missingData = errorsArray
    .map((element) => {
      return element.message;
    })
    .filter(function (item, index, inputArray) {
      return inputArray.indexOf(item) === index;
    })
    .join(', ');
  return createError(422, 'missing parameter: ' + missingData + (additionalMessage || ''));
}

export default generateErrorMessage;
