const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const path = require('path');

const port =  3000;



app.use(express.static(path.join(__dirname, "/public")));

io.sockets.on('error', e=> console.log(e));




let screen;
let controller;

// évènement qui se lance à chaque connexion au socket. 
io.sockets.on('connection', socket=>{
    //log l'évènement de connexion au serveur
    socket.emit("hello", "world");
    //récupère la référence au client écrans
    socket.on('screen',()=>{
        screen = socket.id;
        console.log("screen connected")
    });
    //récupère la référence au client controlleur
    socket.on('controller',()=>{
        controller = socket.id;
        //dit au client diffuseur de lancer L'intro
        socket.emit('StartIntro', {connexion: true, url:""});
    });
    socket.on('disconnect', ()=>{
        console.log('disconnect')
    });
});



server.listen(port, ()=> console.log(`server is running on port :${port}`));