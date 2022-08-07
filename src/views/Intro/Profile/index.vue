<script setup>
   import { inject, computed } from '@vue/runtime-core'
   const { sections: { intro, projects }} = inject('infos')
   const projectLinks = computed(() => {
      return Object.keys(intro.links)[0]
   })
</script>

<template>
   <div class="order-1">
      <!-- Personal infos -->
      <div class="relative flex flex-col-reverse">
         <div class="flex items-center space-x-4">
         <!-- Avatar -->
         <img class="flex-none w-24 h-24 rounded-full object-cover" :alt="`${ intro.fullname } photo`" :src="`./assets/${ intro.avatar }`" loading="lazy" deasync="true">
         <!-- End avatar -->
         <div class="flex-auto ml-2">
         <!-- Fullname -->
         <h1 class="text-3xl lg:text-4xl xl:text-5xl font-bold">
            {{ intro.fullname }}
         </h1>
         <!-- End fullname -->
         <!-- Role -->
         <p class="text-main-color font-semibold text-lg mt-0.5">
            {{ intro.role }}
         </p>
         <!-- End Role -->
         </div>
         </div>
      </div>
   </div>
</template>
