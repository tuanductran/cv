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
         <h1 class="text-3xl lg:text-4xl xl:text-5xl font-bold">
            {{ intro.fullname }}
         </h1>
         <!-- End fullname -->
         <!-- Role -->
         <span class="text-main-color font-semibold text-lg">
            {{ intro.role }}
         </span>
         <!-- End Role -->
         <!-- Github -->
         <a class="text-sm border border-main-color w-max block mt-3 py-2 px-3 text-main-color rounded-full" role="button" :href="intro.links[projectLinks]" title="Xem thêm trên Github" target="_blank" onClick="ga('event', 'ProjectsLink', 'view', 'projects_link');">
            <i :class="`fa fa-${ projectLinks } mr-2`"></i>
            <span>xem thêm trên Github</span>
         </a>
         <!-- End Github -->
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
