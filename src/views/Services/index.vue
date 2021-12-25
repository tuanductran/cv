<script setup>
   import { inject } from '@vue/runtime-core'
   const { sections: { services }} = inject('infos')
</script>

<template>
   <section id="services" class="relative">
      <!-- Ehe pattern -->
      <circle-pattern size="w-20 h-20" position="-left-10 -bottom-10"/>
      <!-- End Ehe pattern -->
         
      <!-- Section content -->
      <section-content title="Services" order="2">
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 z-20">
            <div
               class="flex bg-white dark:bg-gray-800 dark:bg-opacity-70 rounded-lg 2xl:rounded-xl p-5"
               v-for="{ icon, title, description }, k in services"
               :key="k"

               data-aos="fade-up"
            >
               <!-- Service icon -->
               <i :class="`
                  fa fa-${ icon }
                  text-xl lg:text-2xl text-main-color lg:mb-2`
               "></i>
               <!-- End Service icon -->

               <!-- Service content -->
               <div class="ml-4">
                  <!-- Service title -->
                  <h2 data-aos="fade-up" class="mb-4 font-bold xl:text-xl">
                     {{ title }}
                  </h2>
                  <!-- End Service title -->
                  
                  <!-- Service description -->
                  <p class="text-sm leading-relaxed text-gray-500 dark:text-gray-400 dark:text-opacity-80">
                     {{ description }}
                  </p>
                  <!-- End Service description -->
               </div>
               <!-- End Service content -->
            </div>
         </div>
      </section-content>
      <!-- End Section content -->
   </section>
</template>