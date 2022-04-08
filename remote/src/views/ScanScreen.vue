<template>
  <section class="scan">
        <div @click="ReturnToSelection('')" class="retour">
            <i class="fa-solid fa-angle-left"></i>
            <span>Retour</span>
        </div>
        <h2>Scannez le QR code :</h2>
        <div class="zone-scan" id="zone-scan"><span class="span-scan"></span></div>
    </section>
</template>

<script>
export default {
    emits:['selectControle'],
    methods:{
        ReturnToSelection(){
            this.$emit('ReturnToSelection', '')
        },
    }
}
</script>

<style>

</style>