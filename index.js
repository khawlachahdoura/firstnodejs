// Run `node index.js` in the terminal

//console.log(`Hello Node.js v${process.versions.node}!`);

var express = require('express');


//const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send('Hello World!');
});
/*app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: false
 }));
//app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	res.sendFile("/public/connection.html");
	response.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/', function(request, response) {
  
	
	//response.sendFile(path.join(__dirname + '/public/index.html'));
	
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM pagelogin WHERE login = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});*/

/*app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});*/
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
