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
          {room_id:1, room_name:'vergaderzaal 1'},
          {room_id:2, room_name:'vergaderzaal 2'},
          {room_id:3, room_name:'vergaderzaal 3'},
          {room_id:4, room_name:'vergaderzaal 4'}
        ]
      }
      res.json(data);
    });
    //reservation => id: number, roomId: number, subject: string, startDate: Date, endDate: Date
    router.get('/reservations', (req, res) => {
      const reservering = { reservations:
        [
          {reservation_id:1, room_id:1, subject: 'random', start_date:"2017-10-12T11:00:00", end_date:"2017-10-12T12:00:00" },
          {reservation_id:2, room_id:1, subject: 'whatever', start_date:"2017-10-12T13:00:00", end_date:"2017-10-12T15:00:00" },
          {reservation_id:3, room_id:3, subject: 'whatever', start_date:"2017-10-12T13:00:00", end_date:"2017-10-12T15:00:00" }
        ]
      }
      res.json(reservering);
    });
    
    this.app.use('/', router)
    this.app.use(express.static('./client/build' ));
  }
}

export default new App().app