'use strict';

import httpStatus from 'http-status';

const respondSuccess = (logger, res, responseData) => {
  logger.debug('sending success response');
  return res
    .status(httpStatus[responseData.status])
    .send(
      responseData.html || {
        message: responseData.message || '',
        data: responseData.data || {},
      },
    )
    .end();
};

export default respondSuccess;
