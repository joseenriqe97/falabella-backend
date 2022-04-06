import express from 'express';
import primerNumbersRouter from '../routers/primeNumbers';
const apiAppV1 = express();

apiAppV1.use(primerNumbersRouter);

export const v1_0 = apiAppV1;
