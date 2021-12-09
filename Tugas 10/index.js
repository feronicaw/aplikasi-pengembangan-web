var http = require('http')
var mysql = require('mysql')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nyawmart"
})

//create table
conn.connect((err)=>{
    if(err)
        console.log("Problem with MySQL "+err);
    else
        console.log("Connected with Database");
    conn.query("CREATE TABLE produk (kodeproduk INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, namaproduk VARCHAR(30) NOT NULL, satuan VARCHAR(10) NOT NULL, hargaproduk VARCHAR(10) NOT NULL)", (err,result)=>{
        if(err)
            console.log('Error creating table'+err)
        else
            console.log('Database created sucessfully')
    })
})

//menambah data ke tabel
app.post('/produk',(req,res)=>{
    var namaproduk = req.body.namaproduk
    var satuan = req.body.satuan
    var hargaproduk = req.body.hargaproduk
    var query = "INSERT INTO produk (namaproduk, satuan, hargaproduk) VALUES('"+ namaproduk + "','"+ satuan +"', '" + hargaproduk +"')"
    conn.query(query, (err,result)=>{
        if(err)
            res.json(err)
        else
            res.json(result)
    })

})

//delete data tabel
app.delete('/produk/:kodeproduk',(req,res)=>{
    var kodeproduk = req.params.kodeproduk
    var query = "DELETE FROM produk WHERE kodeproduk = " + kodeproduk
    conn.query(query,(err,result)=>{
        if(err)
            res.json(err)
        else
            res.json(result)
    })
})

//update data tabel
app.put('/produk/:kodeproduk',(req,res)=>{
    var kodeproduk  = req.params.kodeproduk
    var namaproduk = req.body.namaproduk
    var satuan = req.body.satuan
    var hargaproduk = req.body.hargaproduk
    var query = "UPDATE produk SET namaproduk ='"+ namaproduk + "', satuan = '"+ satuan +"',hargaproduk = '" + hargaproduk +"' WHERE kodeproduk = " + kodeproduk
    conn.query(query,(err,result)=>{
        if(err)
            res.json(err)
        else
            res.json(result)
    })
})

//tampilkan data
app.get('/produk',(req,res)=>{
    var query = "SELECT * FROM produk LIMIT 3"
    conn.query(query,(err,rows)=>{
        res.json(rows)
    })
})

http.createServer(app)
.listen(8000, ()=>{
    console.log('Server is running on port 8000')
})
