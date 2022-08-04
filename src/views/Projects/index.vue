<script setup>
   import { inject } from "@vue/runtime-core"
   
   import ProjectThumbnail from './ProjectThumbnail/index.vue'
   import ProjectDetails from './ProjectDetails/index.vue'

   const { sections: { intro, projects }} = inject('infos')
</script>

<template>
   <section id="projects">
      <section-content title="Sản phẩm">
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           <div class="card w-100 bg-white dark:bg-product">
              <figure>
                <project-thumbnail :project="project"/>
              </figure>
              <project-details :project="project"/>
           </div>
         </div>
      </section-content>
   </section>
</template>
