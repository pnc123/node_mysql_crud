var mysql = require("mysql");

var conn = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"node_mysql"
});

conn.connect(function(err){
	if (err) throw err;
	console.log("connect");

	var sql ="UPDATE user SET name='Nitin' WHERE sid=114";

	conn.query(sql,function(err,result){
		if (err) throw err;
		console.log(result);
	});
});