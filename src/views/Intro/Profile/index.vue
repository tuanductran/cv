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
      <!-- Action -->
      <div class="relative mt-4">
         <!-- Github -->
         <a class="font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border vnodesign-border-color text-main-color gap-2 normal-case lg:gap-3 mt-2" role="button" :href="intro.links[projectLinks]" title="Github Profile" target="_blank" onClick="ga('event', 'ProjectsLink', 'view', 'projects_link');">
             <i :class="`fa fa-${ projectLinks } mr-2`" />
             <span>Github Profile</span>
         </a>
         <!-- Coverletter -->
          <a class="font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-vnodesign border vnodesign-border-color !text-white gap-2 normal-case lg:gap-3 mt-2 ml-2" role="button" id="show__modal" href="#view_coverletter" title="Thư xin việc" onClick="ga('event', 'CoverletterPopup', 'view', 'coverletter_popup');">
             <i class="fa fa-pencil mr-2" />
             <span>Thư xin việc</span>
          </a>
         <!-- End Coverletter -->
      </div>
   </div>
</template>
