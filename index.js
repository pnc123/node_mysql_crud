var express = require('express')
var fs=require('fs')
var app = express()

app.get(['/','/index.html'], function(req, res) {
	fs.readFile('index.html',function(err,data){
		res.writeHead(200,{'Content-Type':"text/html"})
		res.write(data);
		res.end();
	})
});

app.get('/add.html', function(req, res) {
	fs.readFile('add.html',function(err,data){
		res.writeHead(200,{'Content-Type':"text/html"})
		res.write(data);
		res.end();
	})
});

app.get('/fetch.html', function(req, res) {
	fs.readFile('fetch.html',function(err,data){
		res.writeHead(200,{'Content-Type':"text/html"})
		res.write(data);
		res.end();
	})
});

app.get('/update.html', function(req, res) {
	fs.readFile('update.html',function(err,data){
		res.writeHead(200,{'Content-Type':"text/html"})
		res.write(data);
		res.end();
	})
});

app.get('/delete.html', function(req, res) {
	fs.readFile('delete.html',function(err,data){
		res.writeHead(200,{'Content-Type':"text/html"})
		res.write(data);
		res.end();
	})
});

app.listen(8081);