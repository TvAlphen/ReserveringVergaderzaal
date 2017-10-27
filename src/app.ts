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
    router.get('/meetingRooms', (req, res) => {
      const data = { rooms:
        [
          {id:1, name:'vergaderzaal 1'},
          {id:2, name:'vergaderzaal 2'},
          {id:3, name:'vergaderzaal 3'},
          {id:4, name:'vergaderzaal 4'}
        ]
      }
      res.json(data);
    });
    //reservation => id: number, roomId: number, subject: string, startDate: Date, endDate: Date
    router.get('/reservations', (req, res) => {
      const reservering = { reservations:
        [
          {id:1, roomId:1, subject: 'random', startDate:"2017-10-12T11:00:00", endDate:"2017-10-12T12:00:00" },
          {id:2, roomId:1, subject: 'whatever', startDate:"2017-10-12T13:00:00", endDate:"2017-10-12T15:00:00" }
        ]
      }
      res.json(reservering);
    });
    
    this.app.use('/', router)
    this.app.use(express.static('./client/build' ));
  }
}

export default new App().app