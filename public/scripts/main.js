
//si je veux l'utiliser depuis un domaine différent, je peux ajouter l'url dans les paranthèses
/*
    const socket = io("https://server-domain.com");
*/
const socket = io('127.0.0.1:3000'); 
console.log(socket)
socket.on('connect', ()=>{
    getScreenStatus();
});

function getScreenStatus (){
    socket.emit('screen');
}
