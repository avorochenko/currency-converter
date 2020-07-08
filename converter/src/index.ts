import "reflect-metadata"
import express from "express"
import * as bodyParser from "body-parser"
import dotenv from "dotenv"
import {squiss} from './sqs'

dotenv.config()

const app: express.Express = express();
app.use(bodyParser.json());

app.listen(3000);

console.log("Express application is up and running on port 3000");

squiss.start()
