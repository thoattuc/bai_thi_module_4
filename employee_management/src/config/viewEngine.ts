//import path from "path";
import express from "express";
const path = require("path");

//config view engine & static file
export const configViewEngine = (app) =>{
    console.log(">>> check __dirname:", __dirname);
    app.set('views', path.join(__dirname,'../views'));
    app.set('view engine', 'ejs')
    app.use(express.static(path.join(__dirname,'../public')));
}