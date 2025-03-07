//     user logs in
//   server geneare token
// client stores token
// client makes request
//  server verrifies token
//  access granted 

const jwt = require('jsonwebtoken');
const user = {id:1, username:'peter parker'};
const secretKey = "secretkeyforjsonwebtoken"
const token = jwt.sign(user, secretKey,{expiresIn:'1h'});
console.log("generated token", token);


jwt.verify(token, secretKey,(err, decoded)=>{
    if(err){
        console.log("invalid token");
    }
    else{
        console.log(decoded)
    }
} )