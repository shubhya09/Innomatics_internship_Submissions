const express = require('express');

const app = express();
const port = 5400;

app.get('/', (req,res) => {
    res.send("Response from express serever...")
})


app.get('/about', (req,res) => {
    res.send("Response from express serever...")
})

app.get('/contact', (req,res) => {
    res.send("Response from express serever...")
})


app.get('*', (req,res) => {
    req.statusCode(404);
    res.send("Page Not Get")
})




app.listen(port, ()=>{
    console.log('server is listening')
})