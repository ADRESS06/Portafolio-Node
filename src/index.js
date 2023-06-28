//Importaciones
const express = require('express');

//Variables
const puerto = 3500;
const app = express();

app.use(express.static("public"));
app.use("/static", express.static("public"));

//Ruta home
app.get('/',(req,res) => {
    res.status(200)
    res.sendFile(__dirname + '/index.html');
});

app.get('/git',(req,res) => {
    res.status(200)
    res.redirect(URL='https://github.com/ADRESS06/');
});

//Server
app.listen(puerto,()=>{console.log('servidor corriendo en el puerto ',puerto)})

