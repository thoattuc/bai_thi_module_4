import * as mongoose from "mongoose";

// Create database:
const employee = new mongoose.Schema({
    //_id:  ,
    code: String,
    name: String,
    age: Number,
    salary: Number,
    branch: Number
});
export const Employees = mongoose.model('employees', employee);
