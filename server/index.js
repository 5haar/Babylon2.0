const express = require('express');
const app = express();
const mysql = require('mysql');
 
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'babylon'
});
 
connection.connect(function(error){
    if(!!error) console.log(error);
    else console.log('SQL Database Connected!');
}); 


app.listen(3001, () => {
    console.log('Listening on Port 3001.');
})
