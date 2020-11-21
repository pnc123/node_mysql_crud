var mysql = require("mysql");

var conn = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"node_mysql"
});

conn.connect(function(err){
	if (err) throw err;
	//console.log("connect");

	var sql ="INSERT INTO user(name,location) VALUES('Rohit','Ujjain') ";

	conn.query(sql,function(err,result){
		if (err) throw err;
		console.log("Inersted");
	});
});