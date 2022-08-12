<script setup>
   import { inject, computed } from '@vue/runtime-core'
   const { sections: { intro, projects }} = inject('infos')
   const projectLinks = computed(() => {
      return Object.keys(intro.links)[0]
   })
</script>

<template>
<div class="w-full max-w-sm bg-white bg-profile rounded-lg border vnodesign-border-color">
    <div class="flex flex-col items-center px-4 pt-4 pb-10">
        <img class="mb-3 w-24 h-24 rounded-full" :alt="`${ intro.fullname } photo`" :src="`./assets/${ intro.avatar }`" loading="lazy" deasync="true">
        <h5 class="mb-1 text-xl font-medium">{{ intro.fullname }}</h5>
        <span class="text-sm text-main-color">{{ intro.role }}</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <a :href="intro.links[projectLinks]" title="Github Profile" target="_blank" onClick="ga('event', 'ProjectsLink', 'view', 'projects_link');" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-main-color border vnodesign-border-color rounded-lg">Github Profile</a>
            <a id="show__modal" href="#view_coverletter" title="Thư xin việc" onClick="ga('event', 'CoverletterPopup', 'view', 'coverletter_popup');" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-vnodesign rounded-lg border vnodesign-border-color">Thư xin việc</a>
        </div>
    </div>
</div>
</template>
