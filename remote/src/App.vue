<template>
<div>
    <div id="particles-js"></div>

    <waiting-screen @click="changeToConnexion" :isWaiting="isWaitingScreen"></waiting-screen>

    <main class="container">
      <div id="application">

            <!-- ********** etape accueil ********** -->
            <connexion-screen v-if="!isWaitingScreen"></connexion-screen>
            <!-- ********** loading connexion ********** -->
            

            <!-- ********** etape option ********** -->
            <section v-if="isconnected" class="option">
                <div class="choix">
                    <h2>Choisissez une option :</h2>
                    <button class="btn-qr" id="btn-qr">Scannez le QR code</button>
                    <button class="btn-manuel" id="btn-manuel">Séléction manuelle</button>
                </div>
            </section>

            <!-- ********** etape scanne ********** -->
            <section v-if="isconnected" class="scan">
                <div class="retour">
                    <i class="fa-solid fa-angle-left"></i>
                    <span>Retour</span>
                </div>
                <!-- <font-awesome-icon icon="fa-solid fa-angle-left" /> (Fontawsome avec VueJS)-->
                <h2>Scannez le QR code :</h2>
                <div class="zone-scan" id="zone-scan"><span class="span-scan"></span></div>
            </section>

            <!-- ********** etape manuelle ********** -->
            <section v-if="isconnected" class="manuel">
                <div class="retour"><i class="fa-solid fa-angle-left"></i><span>Retour</span></div>
                <!-- <font-awesome-icon icon="fa-solid fa-angle-left" /> (Fontawsome avec VueJS)-->
                <h2>Mode manuel</h2>
                <h3>Sélectionnez une espèce</h3>
                <div class="liste-manuel">
                    <div>
                        <img src="/assets/images/placeholder.png" alt="dessin de méduse" class="fluide">
                    </div>
                    <div>
                        <img src="/assets/images/placeholder.png" alt="dessin d'une espèce extra-terrestre de graine" class="fluide">
                    </div>
                    <div>
                        <img src="/assets/images/placeholder.png" alt="dessin de poisson" class="fluide">
                    </div>
                    <div>
                        <img src="/assets/images/placeholder.png" alt="dessin d'un feu-folet" class="fluide">
                    </div>
                </div>
            </section>

            <!-- ********** etape diffusion ********** -->
            <section v-if="isconnected" class="diffusion">
                <h2>Regardez devant vous !</h2>
                <p>Diffusion de l'hologramme...</p>
            </section>

        </div>
    </main>
</div>
</template>

<script>
import WaitingScreen from './views/WaitingScreen.vue'
import ConnexionScreen from './views/ConnexionScreen.vue'


export default {
  components: { WaitingScreen, ConnexionScreen },
  
  name: 'App',
  data(){
    return{
      isConnected : false,
      particles: null,
      isWaitingScreen : true,
      io : null,
    }
  }, 
  methods:{
      changeToConnexion(){
          this.isWaitingScreen = false;
      }
  },
  mounted(){
    window.particlesJS();
    this.io = window.io;

    this.io.on('connected', ()=>{
        this.io.emit('controller');
    });
 },
}
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;400;700&display=swap);*{margin:0;padding:0;box-sizing:border-box;font-family:'IBM Plex Sans',sans-serif;font-weight:400}body{position:relative;width:100%;height:100vh;background-color:#111;overflow:hidden}header{display:block;height:30vh}.container{width:80%;margin:0 auto}.fluide{width:100%;height:auto}.logo-debut{width:60%;margin:0 auto;transition:all 250ms ease;padding-top:200px}.logo{transition:all 250ms ease;width:20%;margin:0 auto;padding-top:90px}.titre-debut{font-size:5rem;font-weight:100;text-align:center;letter-spacing:25px;color:#20a2c6}.titre{font-size:2rem;font-weight:100;text-align:center;letter-spacing:25px;color:#20a2c6}#touch{display:block;background-color:transparent;border-radius:50%;width:60px;height:60px;margin:150px auto 0}.touch{position:relative}.touch:before{border:solid 2px #09c;border-radius:50%;bottom:0;content:"";left:0;position:absolute;right:0;top:0;animation:ripple 1.5s ease-out infinite}@keyframes ripple{0%{opacity:.25}100%{border-radius:2em;opacity:0;transform:scale(3)}}.retour{position:absolute;display:flex;justify-content:center;top:2%;left:4%;color:#fff;text-align:center}.retour i{font-size:3em}.retour span{font-size:1.5em;padding:7px 10px}#particles-js{width:100%;height:100%;position:fixed;z-index:-1;filter:blur(3px)}canvas{display:block}.accueil{height:100%}.numero{display:flex;justify-content:center;align-items:center}.numero form{width:70%;display:flex;flex-wrap:wrap;justify-content:center}.code-borne{padding:15px 20px;width:100%;border:1px solid #01384bb7;border-radius:20px;background-color:#01384bb7;font-size:1.1em;margin:25% 0}::placeholder{color:#09c;letter-spacing:2px}::-moz-placeholder{color:#09c;letter-spacing:2px}:-ms-input-placeholder{color:#09c;letter-spacing:2px}.btn-connexion{width:90%;padding:15px;border-radius:50px;color:#fff;background-color:#09c;border:1px solid #09c;margin-top:40%;font-size:1.2em;letter-spacing:2px}.connexion{display:flex;justify-content:center;align-items:center;height:100vh;flex-wrap:wrap}.connexion h2{font-size:3.5em;color:#09c}.loading{position:absolute;top:30%;width:120px;height:120px}.loading span{position:absolute;top:0;left:0;width:100%;height:100%;transform:rotate(calc(18deg * var(--i)))}.loading span::before{content:"";position:absolute;top:0;left:0;width:15px;height:15px;border-radius:50%;background-color:#09c;box-shadow:0 0 10px #09c,0 0 20px #09c,0 0 40px #09c,0 0 60px #09c,0 0 80px #09c,0 0 100px #09c;animation:animate 2s linear infinite;animation-delay:calc(.1s * var(--i))}@keyframes animate{0%{transform:scale(1)}100%,80%{transform:scale(0)}}.option{display:flex;justify-content:center;height:100%}.choix{display:flex;justify-content:center;flex-wrap:wrap}.choix h2{flex-basis:100%;text-align:center;color:#fff;font-size:1.8em;margin-top:15%}.choix .btn-qr{width:70%;padding:15px;background-color:#09c;color:#fff;font-size:1.1em;border:1px solid #09c;border-radius:50px;margin:70px 0 100px}.choix .btn-manuel{width:40%;padding:12px;background-color:transparent;color:#006182;font-size:1.1em;border:2px solid #006182;border-radius:50px}.scan{display:flex;justify-content:center;flex-wrap:wrap;height:100%}.scan h2{flex-basis:100%;text-align:center;color:#fff}.zone-scan{position:relative;width:400px;height:400px;margin-top:10%;background-color:#111}.zone-scan:after{display:block;content:"";width:70px;height:70px;position:absolute;top:-5px;right:-5px;border-top:5px solid #09c;border-right:5px solid #09c}.zone-scan::before{display:block;content:"";width:70px;height:70px;position:absolute;top:-5px;left:-5px;border-top:5px solid #09c;border-left:5px solid #09c}.span-scan:before{display:block;content:"";width:70px;height:70px;position:absolute;bottom:-5px;left:-5px;border-bottom:5px solid #09c;border-left:5px solid #09c}.span-scan:after{display:block;content:"";width:70px;height:70px;position:absolute;bottom:-5px;right:-5px;border-bottom:5px solid #09c;border-right:5px solid #09c}.manuel{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;height:100%;color:#fff}.manuel h2{flex-basis:100%;text-align:center;font-size:1.9em;margin-bottom:70px}.manuel h3{flex-basis:100%;text-align:center;font-size:1.4em;margin-bottom:70px}.liste-manuel{display:flex;flex-wrap:wrap;justify-content:space-around}.liste-manuel div{flex-basis:34%;margin-bottom:50px}.diffusion{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;height:100%}.diffusion h2{flex-basis:100%;text-align:center;color:#09c;font-size:3.5em;letter-spacing:5px;margin:25% 0 15%}.diffusion p{color:#fff;font-size:1.5em;letter-spacing:3px;margin-top:50%}
</style>
