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
         <h1 data-aos="fade-up" data-aos-delay="50" class="text-3xl lg:text-4xl xl:text-5xl font-bold">
            {{ intro.fullname }}
         </h1>
         <!-- End fullname -->
         <!-- Welcome -->
         <span data-aos="fade-up" class="text-main-color font-semibold text-lg">
            Full-time Developer
         </span>
         <!-- End welcome -->
         <a class="text-sm border border-main-color w-max block mx-auto mt-16 xl:mt-10 py-2 px-3 text-main-color rounded-full" role="button" :href="`${ intro.resume }`" target="_blank">
            <i class="fa fa-eye mr-2"></i>
            <span>Xem CV</span>
         </a>
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