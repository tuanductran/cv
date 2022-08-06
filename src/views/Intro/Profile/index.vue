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
      <div class="relative">
         <div class="profile-container flex items-center justify-center space-x-4 text-left">
         <!-- Avatar -->
            <img class="w-14 h-14 rounded-full" :alt="`${ intro.fullname } photo`" :src="`./assets/${ intro.avatar }`" loading="lazy" deasync="true">
         <!-- End avatar -->
         <div>
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
         <!-- Github -->
         <a class="btn btn-sm md:btn-md gap-2 normal-case lg:gap-3 mt-2 flex items-center" role="button" :href="intro.links[projectLinks]" title="Github Profile" target="_blank" onClick="ga('event', 'ProjectsLink', 'view', 'projects_link');">
             <i :class="`fa fa-${ projectLinks }`" />
             <span>Github Profile</span>
         </a>
         <!-- Coverletter -->
          <a class="btn btn-sm md:btn-md gap-2 normal-case lg:gap-3 mt-2 ml-auto flex items-center" role="button" id="show__modal" href="#view_coverletter" title="Thư xin việc" onClick="ga('event', 'CoverletterPopup', 'view', 'coverletter_popup');">
             <i class="fa fa-pencil mr-2" />
             <span>Thư xin việc</span>
          </a>
         <!-- End Coverletter -->
      </div>
   </div>
</template>
