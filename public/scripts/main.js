
const app = Vue.createApp({
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
            console.log('connect');
            this.getScreenStatus();
        });
        this.socket.on('sendID', (id)=>{
            this.id = id.id;
        });
        this.socket.on('phoneConnected', ()=>{
            this.isBroadCasting = true;
        })
    }
  });
  app.mount('#app');