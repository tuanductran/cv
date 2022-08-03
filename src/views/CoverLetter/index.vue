<script setup>
   import { inject } from '@vue/runtime-core'

   /*
      extract the about section from the "sections" key in the json file
      containing the data
   */
   const { sections: { coverletter }} = inject('infos')
</script>

<template>
   <section id="coverletter" class="mb-20">
      <section-content title="Thư xin việc">
         <div>
            <!-- Cover Letter information -->
            <div class="p-5 bg-white vnodesign-border dark:bg-coverletter-dark dark:vnodesign-border rounded-lg place-items-center">
               <p class="leading-relaxed mb-4 last:mb-0 text-color-body dark:text-white"  v-for="content, k in coverletter.content" :key="`content-${ k }`">
                  {{ content }}
               </p>
            </div>
         </div>
      </section-content>
   </section>
</template>
