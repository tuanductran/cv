<script setup>
   import { inject, computed } from '@vue/runtime-core'
   const { sections: { intro, projects }} = inject('infos')
   const projectLinks = computed(() => {
      return Object.keys(intro.links)[0]
   })
</script>

<template>
      <!-- Personal infos -->
      <div class="flex flex-col items-center">
         <!-- Avatar -->
         <img class="mb-3 w-24 h-24 rounded-full" :alt="`${ intro.fullname } photo`" :src="`./assets/${ intro.avatar }`" loading="lazy" deasync="true">
         <!-- End avatar -->
         <!-- Fullname -->
         <h1 class="mb-1 text-xl font-bold">
            {{ intro.fullname }}
         </h1>
         <!-- End fullname -->
         <!-- Role -->
         <p class="text-main-color font-semibold text-sm">
            {{ intro.role }}
         </p>
         <!-- End Role -->
      <!-- Action -->
      <div class="flex mt-4 space-x-3 md:mt-6">
         <!-- Github -->
         <a class="inline-flex items-center py-2 px-4 text-sm font-medium text-center border border-vnodesign-color rounded-lg" role="button" :href="intro.links[projectLinks]" title="Github Profile" target="_blank" onClick="ga('event', 'ProjectsLink', 'view', 'projects_link');">
             <i :class="`fa fa-${ projectLinks } mr-2`" />
             <span>Github Profile</span>
         </a>
         <!-- Coverletter -->
          <a class="inline-flex items-center py-2 px-4 text-sm font-medium text-center bg-vnodesign !text-white rounded-lg" role="button" href="#coverletter" title="Thư xin việc" onClick="ga('event', 'CoverletterPopup', 'view', 'coverletter_popup');">
             <i class="fa fa-pencil mr-2" />
             <span>Thư xin việc</span>
          </a>
         <!-- End Coverletter -->
      </div>
     </div>
</template>
