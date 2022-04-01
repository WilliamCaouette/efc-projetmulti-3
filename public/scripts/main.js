
//si je veux l'utiliser depuis un domaine différent, je peux ajouter l'url dans les paranthèses
/*
    const socket = io("https://server-domain.com");
*/
const app = new Vue({
    el: "#app",
    data() {
      return {
          socket : null,
          id : null,
          isBroadCasting : false,
      };
    },
    methods: {
        getScreenStatus (){
            this.socket.emit('screen');
        },
    },
    mounted(){
        this.socket = io('127.0.0.1:3000');
        this.socket.on('connect', ()=>{
            console.log('connect')
            this.getScreenStatus();
        });
        this.socket.on('sendID', (id)=>{
            this.id = id.id;
        })
    }
  });