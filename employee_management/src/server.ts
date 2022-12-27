const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8080;
const HOST_NAME = process.env.HOST_NAME || 'localhost';

import {configViewEngine} from './config/viewEngine';
import {connection} from "./config/database";
const webRoutes = require('./routes/web');


//Test connection - use  ‘self running’ function
(async () => {
    try {
        await connection();
        //Chay server
        app.listen(PORT, HOST_NAME, () => {
            console.log(`Example app listening on port http://${HOST_NAME}:${PORT}/test`);
        });
    } catch (error) {
        console.log(">>> check error connect database:",error);
    }
})()

//Config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({extended: true})) // for from data

//Thuc thi database

//Config view engine & static files
configViewEngine(app);

//Khai bao routes
app.use('/', webRoutes);