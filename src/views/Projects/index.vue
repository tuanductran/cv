<script setup>
   import { inject, computed } from "@vue/runtime-core"
   
   import ProjectThumbnail from './ProjectThumbnail/index.vue'
   import ProjectDetails from './ProjectDetails/index.vue'

   const { sections: { intro, projects }} = inject('infos')
   const projectLinks = computed(() => {
      return Object.keys(intro.links)[0]
   })
</script>

<template>
   <section id="projects">
      <section-content title="Projects" order="4">
         <div class="xl:grid gap-10 2xl:grid-cols-3">
            <article
               data-aos="fade-up"
               class="mb-10 md:mb-10 xl:mb-16 2xl:mb-5 last:mb-0"
               v-for="project, k in projects"
               :key="k"
            >
               <figure class="grid md:grid-cols-2 2xl:grid-cols-1 md:gap-4 lg:gap-7">
                  <!-- Project thumbnail -->
                  <project-thumbnail :project="project"/>

                  <!-- Project details -->
                  <project-details :project="project"/>
               </figure>
            </article>
         </div>

         <a
            class="
               text-sm border border-main-color w-max block mx-auto 
               mt-16 xl:mt-10 py-2 px-3 text-main-color rounded-full
            "
            role="button" :href="intro.links[projectLinks]"
         >
            <i :class="`fab fa-${ projectLinks } mr-2`"></i>
            <span>See more on Github</span>
         </a>
      </section-content>
   </section>
</template>
