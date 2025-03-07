const http = require('http');

const port = 3400;

const server = http.createServer((req, res) => {
    console.log(req.url)    

    if(req.url === '/'){
        res.end("<h1> Hello from server </h1> ");
    }

    
    else if(req.url === '/about'){
        res.end("<h1> Hello from server </h1> ");
    }

    else if(req.url === '/contact'){
        res.end("<h1> Hello from server </h1> ");
    }

    else {
        res.end("<h1> Page not found </h1> ");
    }
})

server.listen(port, () => {
    console.log(`server is listening at port ${port}`);
})