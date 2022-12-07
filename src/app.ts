import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser'; //use to parse the form data that you pass in the request
import { Posts } from "./routes/posts";


class App {

    public app: express.Application;

    public postsRoutes: Posts = new Posts();

    constructor() {
        this.app = express(); 
        this.config();

        this.postsRoutes.routes(this.app);

    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
    }

}

export default new App().app;