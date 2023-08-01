const http = require('http');
const port = 3000;

const server = http.createServer(function(req,res){

    res.write("Hello World");
    res.end();
})

server.listen(port, function(error){
    if(error){
        console.log("There aree same issues due to" + error);
    }else {
        console.log("Server running on port "+port);
    }
})
