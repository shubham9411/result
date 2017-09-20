var express = require('express')
var path = require('path');
var app = express()
app.listen(process.env.PORT || 8100)
app.get('/',function(req,res){
	res.sendFile(path.join(__dirname + '/index.html'))
})
app.use(express.static(path.join(__dirname + '/')))
app.get('/result', function(req,res){
	result = req.query
	if(result.roll_no && result.father_name){
		// get data from the database
		ans = [{
			"roll_no" : result.roll_no,
			"father_name" : result.father_name,
			"percentage" : 83.2,
			"subjects_theory" : ["Data Mining", "SysAdmin", "Wireless Networks", "Human Values", "Advance Communication Networks"],
			"marks_theory" : [{"external" : [75,88,85,60,65] , "internal" : [39,45,42,39,35] }],
			"subjects_practical" : ["Data Mining", "SysAdmin", "Wireless Networks"],
			"marks_practical" : [{"external" : [75,88,85] , "internal" : [39,45,42] }],
		}]
		res.send(ans)
	}
})