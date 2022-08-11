<script setup>
   import { inject } from '@vue/runtime-core'

   const { sections: { experiences }} = inject('infos')
</script>

<template>
   <section id="experiences">
      <section-content title="Kinh nghiệm làm việc">
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div
               class="flex bg-white bg-exp rounded-lg 2xl:rounded-xl p-3 vnodesign-border"
               v-for="{ periode, jobtitle, company, teamsize, role, time, tasks }, k in experiences"
               :key="`xp-${ k }`"
            >
               <!-- Experience details -->
               <div>
                  <!-- Experience period -->
                  <small class="text-main-color font-semibold xl:text-lg">{{ periode }}</small>
                  <!-- End Experience period -->
                  
                  <!-- Experience title & company -->
                  <h2 class="font-bold text-xl 2xl:text-2xl my-2">
                     {{ jobtitle }} tại {{ company }}
                  </h2>
                  <!-- End Experience title & company -->

                  <!-- Experience team size, role, time and task -->
                  <p
                     class="mb-3 last:mb-0 text-sm xl:text-base"
                     v-for="teamsize, k in teamsizes" :key="`teamsize-${ k }`"
                  >
                     Teamsize: {{ teamsize }}
                  </p>
                  <p
                     class="mb-3 last:mb-0 text-sm xl:text-base"
                     v-for="role, k in roles" :key="`role-${ k }`"
                  >
                     Vị trí: {{ role }}
                  </p>
<p
                     class="mb-3 last:mb-0 text-sm xl:text-base"
                     v-for="time, k in times" :key="`time-${ k }`"
                  >
                     Thời gian làm việc: {{ time }}
                  </p>
                  <p
                     class="mb-3 last:mb-0 text-sm xl:text-base"
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
