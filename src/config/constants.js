'use strict';

let serverURL = null;

if (process.env.ENVIRONMENT === 'dev') {
  serverURL = process.env.DEVELOPMENT_SERVER_URL;
} else {
  serverURL = process.env.PRODUCTION_SERVER_URL;
}

export const ENVIRONMENT = process.env.ENVIRONMENT.toLowerCase();
export const APP_PORT = process.env.APP_PORT;
export const LOG_LEVEL = process.env.LOG_LEVEL;
export const AVAILABLE_VERSIONS = process.env.AVAILABLE_VERSIONS?.split(',');