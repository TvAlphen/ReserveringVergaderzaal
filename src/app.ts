import * as express from 'express';
import path = require('path');

class App {
  public app

  constructor () {
    this.app = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/hello', (req, res) => {
      const data = {
        "name": 'Hello World',
        "enthusiasmLevel": 10
      }
      res.json(data);
    });
    router.get('/', (req, res) => {
      res.json({
        "message": 'Hello World!!'
      });
    });
    
    this.app.use('/', router)
    this.app.use(express.static('./client/build' ));
  }
}

export default new App().app