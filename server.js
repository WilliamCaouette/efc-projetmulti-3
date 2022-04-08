const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: ["http://127.0.0.1:8080/","http://127.0.0.1:3000"],
}));
const server = require('http').Server(app);

const io = require('socket.io');

const path = require('path');
const shortid = require('shortid');
const port =  3000;

const id = shortid.generate();
console.log(id);

app.use(express.static(path.join(__dirname, "/public")));


// envoie en option un accès aux requetes de certaines ori
;


//const corsOptions = {    origin: ["http://127.0.0.1:8080", "http://127.0.0.1:5500", "https://tim.cgmatane.qc.ca", "https://jimzeeking.github.io"]};



const socketServer = new io.Server(server, { cors: { origin: "http://127.0.0.1:8080"} });

socketServer.sockets.on('error', e=> console.log(e));
let screen;
let controller;

// évènement qui se lance à chaque connexion au socket. 
socketServer.sockets.on('connection', socket=>{
    //log l'évènement de connexion au serveur
    socket.emit("connected", "vous êtes connecté à la borne");
    //récupère la référence au client écrans
    socket.on('screen',()=>{
        screen = socket.id;
        console.log("screen connected")
        socketServer.to(screen).emit('sendID', {id:id});
    });
    //récupère la référence au client controlleur
    socket.on('controller',()=>{
        controller = socket.id;
        console.log('controller connected');
        //dit au client diffuseur de lancer L'intro
        socket.emit('StartIntro', {connexion: true, url:""});
    });
    socket.on('testID', (ClientID)=>{
        if(ClientID == id){
            console.log('borne activé');
            socketServer.to(screen).emit('phoneConnected');
        }
        socketServer.to(controller).emit('ScreenConnected', ClientID == id);
    })
    socket.on('disconnect', ()=>{
        console.log('disconnect')
    });
});



server.listen(port, '127.0.0.1', ()=> console.log(`server is running on  : http://127.0.0.1:${port}`));
