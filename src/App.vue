<script setup>
   import { onMounted } from 'vue'
   import AOS from 'aos'

   import AppContainer from './layouts/AppContainer/index.vue'
   import AppHeader from './layouts/AppHeader/index.vue'
   import AppFooter from './layouts/AppFooter/index.vue'

   import 'tailwindcss/tailwind.css'
   import 'aos/dist/aos.css'
   
   onMounted(() => AOS.init({
      throttleDelay: 100,

      offset: 100,
      delay: 500,
      once: true
   }))
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