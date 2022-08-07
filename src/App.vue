<script setup>
   import AppContainer from './layouts/AppContainer/index.vue'
</script>

<template>
   <app-container />
</template>

<style lang="scss">
   @import 'assets/styles/styles.css';
   html {
      .center-element {
         @apply flex justify-center items-center;
      };
   }
</style>
