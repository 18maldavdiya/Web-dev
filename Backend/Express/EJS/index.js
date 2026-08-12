const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));

app.get("/" , (req, res) => {
    res.render("home");
})
app.get("/hello" , (req, res) => {
    res.send("Helloe");
})

app.get("/rolldise" , (req, res) => {
    let dise =  Math.floor(Math.random() * 6) + 1 ;
    res.render("rolldise" , { nums : dise});
})

app.get("/ig/:username" , (req , res) => {
    const followers = ["jbin","Hanish","manish","rogit","shhit"];
    const username = req.params.username;
    console.log(username);
    res.render("instagram.ejs" , {username , followers});
})

app.listen(port, () => {
    console.log(`server is listening at port ${port}`);
});