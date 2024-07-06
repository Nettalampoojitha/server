var http=require('http')
http.createServer(
    function(req,res){
        res.write("helloworld")
        res.end()
    }
).listen(8085)