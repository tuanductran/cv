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
               <!-- Content 1 -->
               <p class="leading-relaxed mb-4 last:mb-0 text-color-body dark:text-white"  v-for="content1, k in coverletter.content1" :key="`content1-${ k }`">
                  {{ content1 }}
               </p>
               <!-- Content 2 -->
               <p class="leading-relaxed mb-4 last:mb-0 text-color-body dark:text-white"  v-for="content2, k in coverletter.content2" :key="`content2-${ k }`">
                  {{ content2 }}
               </p>
               <!-- Content 3 -->
               <p class="leading-relaxed mb-4 last:mb-0 text-color-body dark:text-white"  v-for="content3, k in coverletter.content3" :key="`content3-${ k }`">
                  {{ content3 }}
               </p>
               <!-- Content 4 -->
               <p class="leading-relaxed mb-4 last:mb-0 text-color-body dark:text-white"  v-for="content4, k in coverletter.content4" :key="`content4-${ k }`">
                  {{ content4 }}
               </p>
            </div>
         </div>
   </section>
</template>
