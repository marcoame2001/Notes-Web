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


app.get("/", function(req,res){ //here you pass the parameters for the rendering
    const locals = {
        title: "Node Notes",
        description: "Free NodeJs Notes App"
    }
    res.render("index", locals);

});

app.listen(port, ()=>{
    console.log("App listening on port ${port}");
})