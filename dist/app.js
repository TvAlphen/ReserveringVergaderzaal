"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.app = express();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/hello', (req, res) => {
            const data = {
                "name": 'Hello World',
                "enthusiasmLevel": 10
            };
            res.json(data);
        });
        router.get('/', (req, res) => {
            res.json({
                "message": 'Hello World!!'
            });
        });
        this.app.use('/', router);
        this.app.use(express.static('./client/build'));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map