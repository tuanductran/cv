<script setup>
   import Intro from '../../views/Intro/index.vue'
   import About from '../../views/About/index.vue'
   import Experiences from '../../views/Experiences/index.vue'
   import Projects from '../../views/Projects/index.vue'
   import CoverLetter from '../../views/CoverLetter/index.vue'
</script>

<template>
   <main class="container mx-auto px-5 md:px-9 lg:px-16 xl:px-36 2xl:px-52">
      <!-- Intro -->
      <intro />
      <!-- About -->
      <about />
      <!-- Experiences -->
      <experiences />
      <!-- Projects -->
      <projects />
      <!-- Coverletter -->
      <coverletter />
   </main>
</template>