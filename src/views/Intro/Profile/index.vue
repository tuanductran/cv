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
         <!-- Avatar -->
         <div class="mx-auto">
            <img class="w-24 h-24 rounded-full" :alt="`${ intro.fullname } photo`" :src="`./assets/${ intro.avatar }`" loading="lazy" deasync="true">
         </div>
         <!-- End avatar -->
         <!-- Fullname -->
         <h1 class="text-3xl lg:text-4xl xl:text-5xl font-bold mt-3">
            {{ intro.fullname }}
         </h1>
         <!-- End fullname -->
         <!-- Role -->
         <p class="text-main-color font-semibold text-lg">
            {{ intro.role }}
         </p>
         <!-- End Role -->
         <!-- Github -->
         <a class="btn btn-sm md:btn-md vnodesign-border-color !bg-transparent text-main-color gap-2 normal-case lg:gap-3 mt-2" role="button" :href="intro.links[projectLinks]" title="Github Profile" target="_blank" onClick="ga('event', 'ProjectsLink', 'view', 'projects_link');">
             <i :class="`fa fa-${ projectLinks } mr-2`" />
             <span>Github Profile</span>
         </a>
         <!-- Coverletter -->
          <a class="btn btn-sm md:btn-md bg-vnodesign vnodesign-border-color !text-white gap-2 normal-case lg:gap-3 mt-2 ml-2" role="button" id="show__modal" href="#view_coverletter" title="Thư xin việc" onClick="ga('event', 'CoverletterPopup', 'view', 'coverletter_popup');">
             <i class="fa fa-pencil mr-2" />
             <span>Thư xin việc</span>
          </a>
         <!-- End Coverletter -->
      </div>
   </div>
</template>
