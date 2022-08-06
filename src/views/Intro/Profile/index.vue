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
         <div class="flex items-center justify-center space-x-4">
         <!-- Avatar -->
            <img class="flex-none w-14 h-14 rounded-full object-cover" :alt="`${ intro.fullname } photo`" :src="`./assets/${ intro.avatar }`" loading="lazy" deasync="true">
         <!-- End avatar -->
         <div class="flex-auto">
         <!-- Fullname -->
         <h1 class="font-semibold">
            {{ intro.fullname }}
         </h1>
         <!-- End fullname -->
         <!-- Role -->
         <p class="text-main-color font-semibold mt-0.5">
            {{ intro.role }}
         </p>
         <!-- End Role -->
         </div>
         </div>
      </div>
      <div class="relative">
         <!-- Github -->
         <a class="btn btn-sm md:btn-md btn-outline gap-2 normal-case lg:gap-3 mt-2" role="button" :href="intro.links[projectLinks]" title="Github Profile" target="_blank" onClick="ga('event', 'ProjectsLink', 'view', 'projects_link');">
             <i :class="`fa fa-${ projectLinks } mr-2`" />
             <span>Github Profile</span>
         </a>
         <!-- Coverletter -->
          <a class="btn btn-sm md:btn-md gap-2 normal-case lg:gap-3 mt-2 ml-2" role="button" id="show__modal" href="#view_coverletter" title="Thư xin việc" onClick="ga('event', 'CoverletterPopup', 'view', 'coverletter_popup');">
             <i class="fa fa-pencil mr-2" />
             <span>Thư xin việc</span>
          </a>
         <!-- End Coverletter -->
      </div>
   </div>
</template>
