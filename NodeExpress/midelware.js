// req, res and next

const express = require('express');
const app = express();
const port = 3500;


const ageMiddleware=(req, res, next) =>{
    const age = req.query.age;
    if(!age){
        return req.status(400).send('please enter your age')
    }
    next();
}



app.get('/', (req,res) => {
    res.send("Response from express serever...")
})

// app.use(ageMiddleware);  

app.get('/about', ageMiddleware, (req,res) => {
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
    console.log('server is listenening');
    
})