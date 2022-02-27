<script setup>
   import AppContainer from './layouts/AppContainer/index.vue'
   import AppHeader from './layouts/AppHeader/index.vue'
</script>

<template>
   <app-header />
   <app-container />
</template>

<style lang="scss">
   html {
      scroll-behavior: smooth;

      .center-element {
         @apply flex justify-center items-center;
      };
   }
</style>
