<template>
  <section class="manuel">
        <div @click="ReturnToSelection" class="retour"><i class="fa-solid fa-angle-left"></i><span>Retour</span></div>
        <h2>Mode manuel</h2>
        <h3>Sélectionnez une espèce</h3>
        <div class="liste-manuel">
            <div>
                <img @click="startDiffusion" src="/img/Atokirina.png" alt="dessin d'une espèce extra-terrestre de graine" class="fluide">
            </div>
            <div>
                <img src="/img/Poisson.png" alt="dessin de poisson" class="fluide">
            </div>
            <div>
                <img src="/assets/images/placeholder.png" alt="dessin de poisson" class="fluide">
            </div>
            <div>
                <img src="/assets/images/placeholder.png" alt="dessin d'un feu-folet" class="fluide">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    emits:['ReturnToSelection', 'StartDiffusion'],
    methods:{
        ReturnToSelection(){
            this.$emit('ReturnToSelection', '')
        },
        startDiffusion(){
            this.$emit('StartDiffusion')
        }
    }
}
</script>

<style>

</style>