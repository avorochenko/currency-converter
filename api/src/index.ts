import "reflect-metadata"
import {Request, Response} from "express"
import express from "express"
import * as bodyParser from "body-parser"
import {AppRoutes} from "./routes"
import dotenv from "dotenv"

dotenv.config()

const app: any = express();
app.use(bodyParser.json());

AppRoutes.forEach(route => {
    app[route.method](route.path, (request: Request, response: Response, next: Function) => {
        route.action(request, response)
            .then(() => next)
            .catch(err => next(err));
    });
});

app.listen(8000);

console.log("Express application is up and running on port 8000");
