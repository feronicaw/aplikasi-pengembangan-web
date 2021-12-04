//latihan 7.8
var http = require('http')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var persons = []

app.post('/person',(req,res)=>{
    persons.push(req.body)
    res.json(req.body)
})

app.get('/person',(req,res)=>{
    res.json(persons)
})

http.createServer(app).listen(8000,()=>{
    console.log('Server is running on port 8000')
})

// var data =[]

// app.get('/data',(req, res)=>{
//     res.json(data)
// })

// app.post('/data',(req, res)=>{
//     data.push(Date.now())
//     res.json(data)
// })
// app.listen(8000, ()=>{console.log('Server is running on port 8000')})

// //latihan 7.3-7.7
// var http = require('http')
// var express = require('express')
// var app = express()

// app.get('/users/:userID/books/:bookID', (req, res)=>{
//   res.end(req.params)
// })


// app.listen(8000, ()=>{console.log('Server is running on port 8000')})

//latihan 7.2
// var http = require('http');

// http.createServer((req, res)=>{
//   if (req.url=='/home')
//     res.write('<p>Konten Home</p>')
//   else if (req.url=='/product')
//     res.write('<p>Konten Product</p>')
//   else if (req.url=='/order')
//     res.write('<p>Konten Order</p>')
//   else if (req.url=='/')
//     res.write('<p>Pengembangan Aplikasi Web dengan Nodejs</p>')
//   else
//     res.write('<h1>404</h1>')
//   res.end();
// }).listen(8000, ()=>{
//   console.log('Server is running on port 8000')
// });

//latihan 7.1
// var http = require('http');

// http.createServer((req,res)=>{
//     res.write('<p>Pengembangan Aplikasi Web dengan Nodejs</p>');
//     res.end();
// }).listen(8000,()=>{
//     console.log('Server is running on port 8000')
// });