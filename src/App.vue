<script setup>
   import AppContainer from './layouts/AppContainer/index.vue'
   import AppHeader from './layouts/AppHeader/index.vue'
   import AppFooter from './layouts/AppFooter/index.vue'

   import 'tailwindcss/tailwind.css'
</script>

<template>
   <app-header />
   <app-container />
   <app-footer />
</template>

<style lang="scss">
   html {
      scroll-behavior: smooth;

      .center-element {
         @apply flex justify-center items-center;
      };
   }
</style>