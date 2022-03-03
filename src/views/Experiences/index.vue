<script setup>
   import { inject, computed } from '@vue/runtime-core'

   const { sections: { experiences }} = inject('infos')
   const isEven = computed(() => (index) => {
      return index % 2 === 1
   })
</script>

<template>
   <section id="experiences">
      <section-content title="Kinh nghiệm làm việc">
         <div>
            <div
               class="relative pb-5 last:pb-0 md:w-1/2 even:ml-auto"
               v-for="{ periode, jobtitle, company, tasks }, k in experiences"
               :key="`xp-${ k }`"
            >
               <!-- Experience details -->
               <div
                  class="rounded-lg bg-white dark:bg-exp-dark p-6 2xl:p-6 mr-4 xl:mr-10 vnodesign-border dark:vnodesign-border"
                  :class="{ 'md:ml-4 xl:ml-10 md:mr-0': isEven(k) }"
               >
                  <!-- Experience period -->
                  <small class="text-main-color font-semibold xl:text-lg transition-colors duration-1000">{{ periode }}</small>
                  <!-- End Experience period -->
                  
                  <!-- Experience title & company -->
                  <h2 class="font-bold text-xl 2xl:text-2xl mb-4 transition-colors duration-1000">
                     {{ jobtitle }} tại {{ company }}
                  </h2>
                  <!-- End Experience title & company -->

                  <!-- Experience tasks -->
                  <p
                     class="mb-3 last:mb-0 text-sm xl:text-base text-color-body dark:text-white transition-colors duration-1000"
                     v-for="task, k in tasks" :key="`task-${ k }`"
                  >
                     {{ task }}
                  </p>
                  <!-- End Experience tasks -->
               </div>
               <!-- Card circle -->
               <div class="justify-center w-[2px] md:mr-[-2px] h-full absolute bg-gray-300 dark:bg-exp-dark right-0 top-0 hidden lg:flex" :class="{ 'md:left-0': isEven(k) }">
                  <!-- Outer circle -->
                  <div class="absolute top-1/2 -mt-4 center-element w-4 xl:w-6 h-4 xl:h-6 rounded-full border border-main-color">
                     <!-- Inner circle -->
                     <div class="w-2 xl:w-4 h-2 xl:h-4 bg-main-color rounded-full"></div>
                     <!-- End Inner circle -->
                  </div>
                  <!-- End Outer circle -->
               </div>
               <!-- End card circle -->
            </div>
         </div>
      </section-content>
   </section>
</template>
