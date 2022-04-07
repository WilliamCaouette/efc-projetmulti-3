<template>
  <section class="accueil">
        <div class="numero">
            <form action="">
                <input v-model="id" type="text" id="code-borne" class="code-borne" name="code-borne" placeholder="Entrez le Numéro de borne">
                <input @click="sendID" type="button" id="btn-connexion" class="btn-connexion" value="Connexion">
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            id : ''
        }
    },
    emits:['sendID'],
    methods:{
        sendID(){
            this.$emit('sendID', this.id);
        }
    }
    
}
</script>

<style>

</style>