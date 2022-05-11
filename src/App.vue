<script setup>
   import AppContainer from './layouts/AppContainer/index.vue'
   import AppHeader from './layouts/AppHeader/index.vue'
   import AppFooter from './layouts/AppFooter/index.vue'
</script>

<template>
   <app-container />
</template>

<style lang="scss">
   @import 'assets/styles/styles.css';
   html {
      scroll-behavior: smooth;

      .center-element {
         @apply flex justify-center items-center;
      };
   }
</style>
