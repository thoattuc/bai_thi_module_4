import * as mongoose from "mongoose";
require('dotenv').config();
// create variable to check connection
const dbState = [{
    value: 0,
    label: "disconnected"
},
    {
        value: 1,
        label: "connected"
    },
    {
        value: 2,
        label: "connecting"
    },
    {
        value: 3,
        label: "disconnecting"
    }];

export const connection = async () => {
    const options = {
        dbName: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
    }
    console.log(">>> check options:", options);
    await mongoose.connect(`mongodb://root:123456@localhost:27018/`);
    // check connection
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find(f => f.value === state).label, "to db"); // connected to db
}