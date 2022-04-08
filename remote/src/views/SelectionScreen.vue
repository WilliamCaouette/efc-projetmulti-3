<template>
  <section class="option">
        <div class="choix">
            <h2>Choisissez une option :</h2>
            <button @click="selectControle('QR')" class="btn-qr" id="btn-qr">Scannez le QR code</button>
            <button @click="selectControle('Manuelle')" class="btn-manuel" id="btn-manuel">Séléction manuelle</button>
        </div>
    </section>
</template>

<script>
export default {
    emits:['selectControle'],
    methods:{
        selectControle(type){
            this.$emit('selectControle', type);
        }
    }
}
</script>

<style>

</style>