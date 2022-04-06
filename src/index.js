import app from './app';

if (process.env.ENVIRONMENT === 'DEV') {
  try {
    app;
  } catch (err) {
    console.log(err);
  }
}
