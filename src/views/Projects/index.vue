<script setup>
   import { inject } from "@vue/runtime-core"
   
   import ProjectThumbnail from './ProjectThumbnail/index.vue'
   import ProjectDetails from './ProjectDetails/index.vue'

   const { sections: { intro, projects }} = inject('infos')
</script>

<template>
   <section id="projects">
      <section-content title="Sản phẩm">
         <div class="xl:grid gap-10 2xl:grid-cols-3">
            <article class="mb-10 md:mb-10 xl:mb-16 2xl:mb-5 last:mb-0" v-for="project, k in projects" :key="k">
               <figure class="grid md:grid-cols-2 2xl:grid-cols-1 md:gap-4 lg:gap-7">
                  <!-- Project thumbnail -->
                  <project-thumbnail :project="project"/>
                  <!-- Project details -->
                  <project-details :project="project"/>
               </figure>
            </article>
         </div>
      </section-content>
   </section>
</template>
