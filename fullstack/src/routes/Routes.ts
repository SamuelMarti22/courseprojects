import { Router } from 'express';
import { HomeController } from '../controllers/HomeController.js';
import { CounterController } from '../controllers/CounterController.js'


export default class Routes {
  public static initializeRoutes(): Router {
    const router = Router();

    router.get('/', HomeController.index);
    router.get('/about', HomeController.about);
    router.get('/contact', HomeController.contact);
    router.get('/books', HomeController.books);
    router.get('/books/:id', HomeController.show);
    router.get('/counter', CounterController.index)

    return router;
  }
}