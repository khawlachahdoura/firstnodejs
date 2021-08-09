const {createPool} =require('mysql2');
const pool = createPool({
    host:"localhost",
    user:"admin",
    password:"admin",
    database:"auth",
    connectionLimit: 10
})
exports.getConnection = function(callback) {
    pool.getConnection(function(err, connection) {
        callback(err, connection);
    });
};
pool.query('select * from pagelogin where id=?',[1],(err,result,fields)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})
module.exports=pool;