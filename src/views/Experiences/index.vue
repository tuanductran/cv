<script setup>
   import { inject } from '@vue/runtime-core'

   const { sections: { experiences }} = inject('infos')
</script>

<template>
   <section id="experiences">
      <section-content title="Kinh nghiệm làm việc">
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
               class="flex bg-white dark:bg-exp-dark rounded-lg 2xl:rounded-xl p-5 vnodesign-border dark:vnodesign-border"
               v-for="{ periode, jobtitle, company, tasks }, k in experiences"
               :key="`xp-${ k }`"
            >
               <!-- Experience details -->
               <div class="mx-4">
                  <!-- Experience period -->
                  <small class="text-main-color font-semibold xl:text-lg">{{ periode }}</small>
                  <!-- End Experience period -->
                  
                  <!-- Experience title & company -->
                  <h2 class="font-bold text-xl 2xl:text-2xl mb-4">
                     {{ jobtitle }} tại {{ company }}
                  </h2>
                  <!-- End Experience title & company -->

                  <!-- Experience tasks -->
                  <p
                     class="mb-3 last:mb-0 text-sm xl:text-base text-color-body dark:text-white"
                     v-for="task, k in tasks" :key="`task-${ k }`"
                  >
                     {{ task }}
                  </p>
                  <!-- End Experience tasks -->
               </div>
            </div>
         </div>
      </section-content>
   </section>
</template>
