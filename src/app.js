const express = require("express");
const bodyParser = require("body-parser");
const knex = require("../db/knex");

class App {
    constructor() {
        this.app = express();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express.Router();
        router.use(bodyParser.json());
        router.get('/api/meetingRooms', (req, res) => {
            knex.select().from('room').then((rooms) => {
                res.send(rooms);
            });
        });
        router.get('/api/reservations', (req, res) => {
            knex.select().from('reservation').then((reservations) => {
                res.send(reservations);
            });
        });
        router.post('/api/reservations', (req, res) => {
            var data = req.body;
            knex.raw('insert into reservation (reservation_id, room_id, subject, start_date, end_date) values(?, ?, ?, ?, ?)', [data.reservation_id, data.room_id, data.subject, data.start_date, data.end_date])
            .then( () => {
                knex.select().from('reservation').then((reservations) => {
                res.send(reservations)
                });
            });
        });
        router.delete('/api/delete/:id', (req, res) => {
            let id = req.params.id;
            knex.raw('delete from reservation where reservation_id = ?', [id])
            .then( () => {
                knex.select().from('reservation').then((reservations) => {
                res.send(reservations);
                });
            });
        });
        this.app.use('/', router);
        this.app.use(express.static('./client/build'));
    }
}
exports.default = new App().app;