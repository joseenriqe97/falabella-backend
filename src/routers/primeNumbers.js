import { Router } from 'express';
import { getPrimeNumbers } from '../resources/primeNumbers/getPrimeNumbers';

const primeNumbersRouter = Router();

primeNumbersRouter.get('/primeNumber', getPrimeNumbers);

export default primeNumbersRouter;
