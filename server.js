const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.engine(".hbs", exphbs({
    extname: ".hbs",
    defaultLayout: 'layout',
}));

app.set("view engine", ".hbs");

app.get("/", (req, res)=>{
    res.render("home");
});

app.use((req, res)=>{
    res.status(404).render("notFound");
});

app.listen(HTTP_PORT, ()=>{
    console.log("server listening on " + HTTP_PORT);
});