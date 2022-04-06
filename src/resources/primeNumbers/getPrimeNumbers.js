import logger from '../../logger';
import respondError from '../../utils/respondError';
import respondSuccess from '../../utils/respondSuccess';

export const getPrimeNumbers = async (req, res) => {
  const { number } = req.query;

  let responseData = {};
  let auxArray = [];

  logger.debug('get getPrimeNumbers resource');

  try {
    if (!number) {
      throw 'You must enter a number first';
    }

    for (let i = 2; i <= number; i++) {
      if (primeNumbers(i)) {
        auxArray.push(i);
      }
    }

    responseData.message = 'success';
    responseData.data = auxArray.sort((a, b) => b - a).toString();
    responseData.status = 'OK';

    return respondSuccess(logger, res, responseData);
  } catch (err) {
    return respondError(logger, res, err);
  }
};

function primeNumbers(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
