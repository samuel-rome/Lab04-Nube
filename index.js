const  express = require('express')

const app = express()

app.get('/clientes', (req, res) => {

    res.sendFile('/static/clientes.html', {
        root : __dirname
    })
})

app.get('/productos', (req, res) => {

    res.sendFile('/static/productos.html', {
        root : __dirname
    })
})

// app.get('/index', function(req, res){
//     response.render('index.ejs',{
//         people: [
//             { name: 'samuel'},
//             { name: 'samir'}
//         ]
//     });
// });

app.use((req, res) => {
    res.status(404).send('No se encontro tu pagina')
})



app.listen(3000)
console.log('Server on port ${3000}')

// var express = require('express');
// var bodyParser = require('body-parser');
// var cors = require('cors');
// var path = require('path');

// var app = express();

// app.use(bodyParser());
// app.use(cors());

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.get('/', function(request, response){
//     response.render('index',{
//         people: [
//             { name: 'samuel'},
//             { name: 'samir'}
//         ]
//     });
// });

// app.listen(8000, function(){
//     console.log("CONECTADO AL PUERTO 8000");
// });

