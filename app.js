var express = require('express');
var path = require('path');

var app = express()
var http = require('http').createServer(app)

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html')
})
let port = (process.env.PORT || 3000)
http.listen(port, function(){
	console.log('Escuchando en puerto ' + port)
})