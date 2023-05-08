//Definir variables
const express = require('express'); //HTTP
const hbs = require('hbs'); // HTML - Dinamico
const bodyparser =  require('body-parser'); // Procesar solicitudes POST
const port = process.env.PORT || 3000; // Puerto

const app = express();
//boton de vistas - HTML dinamicos
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partial',()=>{});

//Middleware - use
app.use(express.static('public'));
app.use(bodyparser.urlencoded( { extended: true } ) );
app.use(bodyparser.json());

//Definir las rutas - para el cliente
app.post('/dashboard', (req,res)=>{
    //res.send('Aqui va el dash') //Texto 
    //res.sendFile('dashboard.html')//Archivo - HTML
    res.render('dashboard',{
        nombre : "Rodrigo Emiliano Maldonado de la Cruz",
        email : "rodrigo0o@gmail.com"
    }) //Vista dinamica - HTML dinamico

})

app.get('/',(req,res)=>{
    res.render('login')
})

app.get('*',(req,res)=>{
    res.render('404');
})
//Esta parte es para el desarrollador
app.listen(port,()=>{
    console.log('El servidor express esta corriendo  en el puerto: ', port)
})

