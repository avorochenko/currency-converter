# currency-converter

1. pull project from repo
2. copy `.env` files from `.env.example` in ./api and ./converter dirs and replace dummy data.
  - also replase OPENEEXCHANGERATES_APP_ID with your app_id (https://openexchangerates.org/account/app-ids)

3. from root dir run `docker-compose build && docker-compose up`

# About 
The application consists of two microservices.
- The main task of `api` is to accept requests for currency conversion and send a message to the sqs queue. `api` also accepts a request from a client for a list of currencies.
- `converter` processes messages from the queue for currency conversion via api https://docs.openexchangerates.org/doc and send email to user with converted rate
