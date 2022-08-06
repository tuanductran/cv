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
         <div class="cv-author mx-auto">
            <img class="w-full rounded-full" :alt="`${ intro.fullname } photo`" :src="`./assets/${ intro.avatar }`" loading="lazy" deasync="true">
         </div>
         <!-- End avatar -->
         <!-- Fullname -->
         <h1 class="text-3xl lg:text-4xl xl:text-5xl font-bold mt-3">
            {{ intro.fullname }}
         </h1>
         <!-- End fullname -->
         <!-- Role -->
         <p class="text-main-color font-semibold text-lg mt-3">
            {{ intro.role }}
         </p>
         <!-- End Role -->
         <!-- Github -->
         <a class="btn btn-sm md:btn-md btn-ghost gap-2 normal-case lg:gap-3" role="button" :href="intro.links[projectLinks]" title="Github Project" target="_blank" onClick="ga('event', 'ProjectsLink', 'view', 'projects_link');">
            <i :class="`fa fa-${ projectLinks } mr-2`" />
            <span>Github Project</span>
         </a>
         <!-- End Github -->
         <!-- Coverletter -->
         <a class="btn btn-sm md:btn-md gap-2 normal-case lg:gap-3" role="button" id="show__modal" href="#view_coverletter" title="Thư xin việc" onClick="ga('event', 'CoverletterPopup', 'view', 'coverletter_popup');">
            <i class="fa fa-pencil mr-2" />
            <span>Thư xin việc</span>
         </a>
         <!-- End Coverletter -->
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
