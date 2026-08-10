const express = require("express");
const app = express();
const port = 8080;

app.set("view engine" , "ejs");

app.get("/" , (req, res) => {
    res.send("this is the home page ");
})

app.listen(port, () => {
    console.log(`server is listening at port ${port}`);
});