var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var route = q.pathname;
    if (route == '/index'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('index.html',function(err, data){
            try{                
                res.write(data);  
                return res.end();
            }
            catch(err){
                console.log(err);
            }      
        }); 
    }   

    else{
        return res.end('Invalid URL');
    }  
}).listen(8080);
