<script setup>
   import { inject } from '@vue/runtime-core'
   const { sections: { intro }} = inject('infos')
</script>

<template>
   <div class="order-2 md:order-1 mt-10 md:mt-0">
      <!-- Personal infos -->
      <div class="relative">
         <!-- Avatar -->
         <div class="cv-author mx-auto">
            <img class="w-full rounded-full" :alt="`${ intro.fullname } photo`" :src="`./assets/${ intro.avatar }`" loading="lazy" deasync="true">
         </div>
         <!-- End avatar -->
         <!-- Fullname -->
         <h1 class="text-3xl lg:text-4xl xl:text-5xl font-bold transition-colors duration-1000">
            {{ intro.fullname }}
         </h1>
         <!-- End fullname -->
         <!-- Welcome -->
         <span class="text-main-color font-semibold text-lg transition-colors duration-1000">
            Full-time Developer
         </span>
         <!-- End welcome -->
      </div>
   </div>
</template>
<style lang="scss">
.cv-author {
   width: 100px;
   height: 100px;
   border-radius: 120px;
   overflow: hidden;
   display: inline-block;
   border: 1px solid #ccc;
   img {
      width: 100%
   }
}
</style>
