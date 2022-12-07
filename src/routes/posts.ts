import {Request, Response} from "express";

import posts = require('../data/sbis.json');

export class Posts {       
    public routes(app): void {  

        app.route('/posts')
        .get((req: Request, res: Response) => {            
            res.status(200).send(posts);
        })  
        
        app.route('/post/:id')
        .get((req:Request, res: Response) => {
            let id = req.params.id;
            res.status(200).send(posts[id]);
        })

        app.use((req, res, next) => {
            const error = new Error('not found');
            return res.status(404).json({
                message: error.message
            });
        });
        
    }
}