<script setup>
   import { inject } from '@vue/runtime-core'

   /*
      extract the about section from the "sections" key in the json file
      containing the data
   */
   const { sections: { coverletter }} = inject('infos')
</script>

<template>
   <section id="coverletter">
         <div class="gap-10 py-10 md:py-14 lg:py-16 mt-12">
            <!-- Cover Letter information -->
            <div>
               <h2 class="text-main-color font-bold mb-5">
                  Thư xin việc
               </h2>
               <p class="leading-relaxed mb-4 last:mb-0 text-color-body dark:text-white"  v-for="content, k in coverletter.content" :key="`content-${ k }`">
                  {{ content }}
               </p>
            </div>
         </div>
   </section>
</template>
