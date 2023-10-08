const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var port = 3000;

let items = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));


app.get("/", (req, res) => {
    
    var today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
   
    let day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay: day, newListItems: items});
    

    app.post("/", (req, res) => {
        let item = req.body.newItem;

        items.push(item);

        res.redirect("/");

    })
});


app.listen(port, function() {
    console.log("Server running on port" + port);
});

