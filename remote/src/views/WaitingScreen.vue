<template>
  <header class="container">
        <div id="logo" :class="isWaiting? 'logo-debut' : 'logo'">
            <img src="img/logo.png" alt="" class="fluide">
        </div>
        <h1 id="titre" :class="isWaiting? 'titre-debut' : 'titre'">HOLOPLEX</h1>
        <div v-if="isWaiting" id="touch" class="touch"></div>
    </header>
</template>

<script>
export default {
    props:['isWaiting']

}
</script>

<style>

</style>