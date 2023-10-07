const express = require("express");
const app = express();
const path = require("path")
const port = 3000;
const bodyParser = require('body-parser');
//Express related code 
app.use("/static", express.static('static'))//Serving static files
app.use(bodyParser.urlencoded({ extended: true }));

// Pug related code

app.set('view engine', 'pug')//Setting the template engine as pug

app.set('views', path.join(__dirname, "views"));  //set the views directory 


//Endpoints
app.get("/", (req, res) => {
    const con = "niceness"
    const params = {  }
    res.status(200).render('index.pug', params)
})

app.listen(port, () => {
    console.log(`started on port ${port}`);
})