// Run `node index.js` in the terminal

//console.log(`Hello Node.js v${process.versions.node}!`);

var express = require('express');

const axios = require('axios');
//const express = require('express');
const app = express();
const PORT = 8080;
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// ####################################################################################### //

// POST request to /login
app.post('/login', function(req, res) {
	// Get form data
	const user = req.body
	// Send POST request to API 
	axios.post(`${apiUrl}/login`, {
	  login: user.login,
	  password: user.password
	})
	.then((response) => {
	  // Redirect to connection page if login is successful
	  if (response.status == 200) {
		res.render('public/connection', {
		  data: {
			exists: true,
			name: response.data.name
		  }
		});
	  }
	})
	.catch((error) => {
	  // Show error if login unsuccessful
	  if (error.response.status == 401){
		res.render('pages/login', {
		  data: {
			error: true,
			message: error.response.data.message
		  }
		});
	  }
	});
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
