## Steps to lift the service locally


Open a terminal and executes:

Install all dependencies

  ```sh

  $npm install
  
  ```

Run API

  ```sh

  $npm start

  ```

Run API in watch mode

  ```sh

  $npm run start:watch

  ```
You need to have an .env file for the environment variables that the service handles

e.g.

```dotenv

APP_PORT=3003

ENVIRONMENT=DEV
AVAILABLE_VERSIONS="v1.0.0"

<!-- database provider = atlas | mongo -->
DB_PROVIDER=mongo
DB_HOST=
DB_NAME="conexa-user"
DB_PORT=27017
DB_USERNAME=
DB_PASSWORD=

# Log level
LOG_LEVEL=debug

#external services
URL_PLACE_HOLDER="https://jsonplaceholder.typicode.com"
JWT_TOKEN="sYhIGWiAmP"

```
Open documentation: 
