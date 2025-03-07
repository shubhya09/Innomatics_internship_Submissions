require('dotenv').config();
const express = require('express');
const port = process.env.PORT;
require("./config/db")
const app = express();

app.get('/', () =>{
    resizeBy.send("<h1>Hello World</h1>")
})

app.listen(port, ()=>{
    console.log(`error is running at http://localhost:${port}`);
    
})