const express = require('express');
var mysql = require('mysql2');
var session = require('express-session');
var bodyParser = require('body-parser');

const app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const PORT = 3000;
var db = require('./database');
app.get('/login', (req, res) => {

  res.writeHead(200,{'connect-Type':'text/json'});

  connection.query('select * from pagelogin WHERE id= ? ', [1],(err,result,fields)=>{
   if(err)throw err;
   res.write(JSON.stringify(result));
   res.end();
  }
 
  );
});


    db.getConnection(function(err, connection){
app.post('/', (request, response)=> {
  var username = request.body.username;
	var password = request.body.password;
  
 
  if(!err){
	if (username && password) {
		connection.query('SELECT * FROM pagelogin WHERE login = ? AND password = ?', [username, password], function(error, results, fields) {
      
      if(results.length>0){
        request.session.loggedin = true;
        request.session.username =username;
        response.send('Welcome back!');
      }else{
        response.send('Incorrect Username and/or Password!');
        response.end();
      }
            
		
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	} }else{
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Hello World Page</title>");
    response.write("</head>");
    response.write("<body>");
    response.write(err.toString());
    response.write("</body>");
    response.write("</html>");
    response.end();
}
});
});


 /* res.writeHead(200,{'connect-Type':'text/json'});
 
  connection.query('select * from pagelogin where id=?',[1],(err,result,fields)=>{
   if(err){throw err;}
   else{

   res.write(JSON.stringify(result));
   res.end();
  }}
 
  );*/

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
