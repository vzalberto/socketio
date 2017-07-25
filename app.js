var app = require('express')()
var http = require('http').createServer(app)

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html')
})

http.listen(PORT || 3000 , function(){
	console.log('Escuchando en puerto 3000')
})