<script setup>
   import Hero from './Hero/index.vue'
   import Profile from './Profile/index.vue'
</script>

<template>
   <section id="intro" class="
      grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-20
      items-center pt-24 xl:pt-32 2xl:pt-44
   ">
      <profile />
      <hero />
   </section>
</template>