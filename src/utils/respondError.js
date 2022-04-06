'use strict';

// import createError from 'http-errors';
import { INTERNAL_SERVER_ERROR } from 'http-status';

const respondError = (logger, res, error, logData, html) => {
  const status = error.status || INTERNAL_SERVER_ERROR;
  if (status < 500) {
    logger.warn(error.stack);
  } else {
    logger.error(error.stack);
  }

  return res
    .status(status)
    .send(
      html || {
        message: error.toString() || 'Server Not Found',
      },
    )
    .end();
};
export default respondError;
