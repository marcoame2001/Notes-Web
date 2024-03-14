require("dotenv").config();

const express  = require("express");

const expressLayouts = require("express-ejs-layouts");

const app = express(); //creates the application

const port  = 5000 || process.env.PORT;

app.use(express.urlencoded({extended:true}));

app.use(express.json());

//Static files

app.use(express.static("public")); //to link our html links

//templating engine

app.use(expressLayouts);
app.set("layout","./layouts/main");
app.set("view engine","ejs");


// routes

app.use("/",require("./server/routes/index"));

app.listen(port, ()=>{
    console.log("App listening on port ${port}");
})