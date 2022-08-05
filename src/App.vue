<script setup>
   import AppContainer from './layouts/AppContainer/index.vue'
   import CoverLetter from './views/CoverLetter/index.vue'
   import AppFooter from './layouts/AppFooter/index.vue'
</script>

<template>
   <CoverLetter />
   <app-container />
   <app-footer />
</template>

<style lang="scss">
   @import 'assets/styles/styles.css';
   html {
      .center-element {
         @apply flex justify-center items-center;
      };
   }
</style>
