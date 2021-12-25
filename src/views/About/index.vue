<script setup>
   import { inject } from '@vue/runtime-core'
   import Skill from './Skill/index.vue'

   /* 
      extract the about section from the "sections" key in the json file
      containing the data
   */
   const { sections: { about }} = inject('infos')
</script>

<template>
   <section id="about">         
      <section-content title="Về tôi" order="1">
         <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <!-- Personal information -->
            <div>
               <h2 class="text-main-color font-bold mb-5">
                  Tiểu sử của tôi
               </h2>
               <!-- Bigraphy -->
               <p data-aos="fade-left" class="leading-relaxed mb-4 last:mb-0 text-gray-500 dark:text-gray-400"  v-for="bio, k in about.bio" :key="`bio-${ k }`">
                  {{ bio }}
               </p>
               <!-- End Bigraphy -->
            </div>
            <!-- Skills -->
            <div class="relative">
               <!-- <circle-pattern
                  size="w-24 h-24"
                  position="-left-12 -top-12"
               /> -->
               <h2 class="text-main-color font-bold mb-5">
                  Kinh nghiệm
               </h2>
               <!-- Skills list -->
               <ul class="mt-5 grid md:grid-cols-2 gap-8">
                  <template 
                     v-for="skill, level, k in about.skills"
                     :key="`skill-${ k }`"
                  >
                     <!-- Single skill -->
                     <skill :skill="skill" :level="level"/>
                     <!-- End Single skill -->
                  </template>
               </ul>
               <!-- End skills list -->
            </div>
         </div>
      </section-content>
   </section>
</template>