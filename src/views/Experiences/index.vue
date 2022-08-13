<script setup>
   import { inject } from '@vue/runtime-core'

   const { sections: { experiences }} = inject('infos')
</script>

<template>
   <section id="experiences">
      <section-content title="Kinh nghiệm làm việc">
         <ol 
            class="relative border-l vnodesign-border-color"
            v-for="{ periode, jobtitle, company, tasks }, k in experiences"
            :key="`xp-${ k }`"
         >
               <!-- Experience details -->
               <li class="mb-10 last:mb-0 ml-4">
                  <div class="absolute w-3 h-3 bg-vnodesign rounded-full mt-1.5 -left-1.5 border vnodesign-border-color"></div>
                  <!-- Experience period -->
                  <time class="text-main-color mb-1 text-sm font-normal leading-none">{{ periode }}</time>
                  <!-- End Experience period -->
                  <!-- Experience title & company -->
                  <h3 class="text-lg font-semibold">
                     {{ jobtitle }} tại {{ company }}
                  </h3>
                  <!-- End Experience title & company -->
                  <!-- Experience tasks -->
                  <p
                     class="text-base font-normal"
                     v-for="task, k in tasks" :key="`task-${ k }`"
                  >
                     {{ task }}
                  </p>
                  <!-- End Experience tasks -->
               </li>
            </ol>
      </section-content>
   </section>
</template>
