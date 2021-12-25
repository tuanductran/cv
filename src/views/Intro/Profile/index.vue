<script setup>
   import { inject } from '@vue/runtime-core'
   const { sections: { intro }} = inject('infos')
</script>

<template>
   <div class="order-2 md:order-1 mt-10 md:mt-0">
      <!-- Personal infos -->
      <div class="relative">
         <circle-pattern size="w-32 h-32" position="-left-16 -top-12"/>

         <!-- Welcome -->
         <span data-aos="fade-up" class="text-main-color font-semibold text-lg">
            Hi 👋, my name is
         </span>
         <!-- End welcome -->
         
         <!-- Fullname -->
         <h1 data-aos="fade-up" data-aos-delay="50" class="text-3xl lg:text-4xl xl:text-5xl font-bold">
            {{ intro.fullname }}
         </h1>
         <!-- End fullname -->

         <!-- Divdor -->
         <div data-aos="fade-up" data-aos-delay="150" class="w-24 h-1 bg-main-color bg-opacity-70 my-8">
            <div class="w-10 h-1 bg-main-color"></div>
         </div>
         <!-- End divdor -->

         <!-- Short bio -->
         <p data-aos="fade-up" data-aos-delay="200" class="text-gray-400 xl:w-3/4 2xl:text-xl leading-relaxed">
            {{ intro.excerpt }}
         </p>
         <!-- End short bio -->
      </div>

      <!-- Buttons -->
      <div class="mt-12 flex" data-aos="fade-up" data-aos-delay="250">
         <!-- Cv button -->
         <a role="button" aria-label="Xem CV" :href="`${ intro.resume }`" target="_blank" class="flex items-center px-3 text-sm bg-main-color hover:bg-opacity-80 text-white dark:text-white rounded-md">
            <i class="fas fa-download mr-2"></i>
            <span>Xem CV</span>
         </a>
         <!-- End Cv button -->

         <!-- Social Account button -->
         <a
            v-for="link, icon in intro.links"
            role="button"
            target="_blank"
            
            :aria-label="`${ icon } account`"
            :key="icon"
            :href="link"

            class="center-element ml-2 w-9 h-9 rounded-md bg-main-color hover:bg-opacity-80 text-white dark:text-white"
         >
            <i :class="`fab fa-${ icon } text-lg`"></i>
         </a>
         <!-- End Social Account button -->
      </div>
   </div>
</template>