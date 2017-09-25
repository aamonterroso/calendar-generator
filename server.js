'use strict'

let express = require('express');
var HolidayAPI = require('node-holidayapi');
//API TEST KEY - only dummy holidays data is received
var api = new HolidayAPI('064704d8-7c3e-49b4-93e1-a2443029fa3a').v1;
var app = express();

app.use(express.static(__dirname + "/public"));

// GET route to query holidays by country
app.get('/getHolidays/:countryCode/:year', function(req, res, next) {
	const countryCode = req.params.countryCode;
	const year = req.params.year;
	console.log(countryCode);
	console.log(year);
});

app.listen(process.env.PORT || 3000, function(){
  console.log("CalendarApp listening on port %d in %s mode", this.address().port, app.settings.env);
});