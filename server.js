var express = require('express')
var path = require('path');
var app = express()
app.listen(process.env.PORT || 8100)
app.get('/',function(req,res){
	res.sendFile(path.join(__dirname + '/index.html'))
})
