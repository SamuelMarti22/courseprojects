import type { Request, Response } from 'express';

export class CounterController{
    static  index(req: Request, res: Response) {
        res.render('counter/index');
    }
}