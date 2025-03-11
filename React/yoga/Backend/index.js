require('dotenv').config();
const express = require('express');
const ImageRoutes = require('./routes/imageRoutes')
const cors = require('cors')
app.use(cors());

const port = process.env.PORT;
require("./config/db")
const app = express();
app.use(express.json());

app.get('/', () =>{
    resizeBy.send("<h1>Hello World</h1>")
})

app.use('/api/images', ImageRoutes)

app.listen(port, ()=>{
    console.log(`error is running at http://localhost:${port}`);
    
})