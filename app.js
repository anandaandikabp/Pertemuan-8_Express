// const fs = require('fs');
// const http = require('http');
// const port = 3000;

// const halHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             res.writeHead(404);
//             res.write('file not found');
//         } else {
//             res.write(data);
//         }
//         res.end();
//     })
// }

// http
//     .createServer((req, res) => {
//     const url = req.url;
//     console.log(url);
//     // res.writeHead(200, {
//     //     'Content-Type' : 'text/html',
//     // });   

//     if (url === '/about') {
//         halHTML('./about.html', res);
//     } else if (url === '/contact') {
//         halHTML('./contact.html', res);
//     } else {
//         halHTML('./index.html', res);
//     }    
//     })
//     .listen(port, () => {
//         console.log(`server is listening port ${port}`);
//     });

const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) => {
    res.sendFile('./index.html', {root: __dirname});
})

app.get('/about', (req, res) => {
    res.sendFile('./about.html', {root: __dirname});
})

app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', {root: __dirname});
})

app.get('/product/:id?', (req, res) => {
    res.send(`product id : ${req.params.id} <br> category id : ${req.query.category}`);
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('Not Found 404')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

