<script setup>
   import { inject } from '@vue/runtime-core'
   import Skill from './Skill/index.vue'
   import Interest from './Interest/index.vue'
   import Contacts from './ContactInfo/index.vue'

   /*
      extract the about section from the "sections" key in the json file
      containing the data
   */
   const { sections: { about }} = inject('infos')
</script>

<template>
   <section id="cv">
         <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 md:py-14 lg:py-16 mt-12">
            <!-- Personal information -->
            <div>
               <h2 class="text-main-color font-bold mb-5">
                  Mục tiêu nghề nghiệp
               </h2>
               <!-- Bigraphy -->
               <p class="leading-relaxed mb-4 last:mb-0 text-color-body dark:text-white"  v-for="bio, k in about.bio" :key="`bio-${ k }`">
                  {{ bio }}
               </p>
               <!-- End Bigraphy -->
               <h2 class="text-main-color font-bold mb-5">
                  Thông tin cá nhân
               </h2>
               <!-- Bigraphy -->
               <p class="leading-relaxed mb-4 last:mb-0 text-color-body dark:text-white"  v-for="personal_information, k in about.personal_information" :key="`personal_information-${ k }`">
                  {{ personal_information }}
               </p>
               <!-- End Bigraphy -->
               <h2 class="text-main-color font-bold mb-5">
                  Sở thích
               </h2>
               <!-- interest -->
               <ul class="mt-5 grid grid-cols-2 gap-8">
                  <template 
                     v-for="interest, k in about.interest"
                     :key="`interest-${ k }`"
                  >
                     <!-- Single interest -->
                     <interest :interest="interest" />
                     <!-- End interest -->
                  </template>
               </ul>
               <!-- End interest -->
            </div>

            <div class="relative">
               <!-- Contact info -->
               <h2 class="text-main-color font-bold mb-5">
                  Thông tin liên hệ
               </h2>
               <!-- contacts list -->
               <ul class="mt-5 grid grid-cols-2 gap-8">
                  <template 
                     v-for="contacts, k in about.contacts"
                     :key="`contacts-${ k }`"
                  >
                     <!-- Single contacts -->
                     <contacts :contacts="contacts" />
                     <!-- End Single contacts -->
                  </template>
               </ul>
               <!-- End skills list -->
               <!-- Certificate -->
               <h2 class="text-main-color font-bold mb-5">
                  Chứng chỉ
               </h2>
               <p class="leading-relaxed mb-4 last:mb-0 text-color-body dark:text-white" v-for="certificate, k in about.certificate" :key="`certificate-${ k }`">
                  {{ certificate }}
               </p>
               <!-- Skills -->
               <h2 class="text-main-color font-bold mb-5">
                  Kỹ năng
               </h2>
               <!-- Skills list -->
               <ul class="mt-5 grid grid-cols-2 gap-8">
                  <template 
                     v-for="skill, k in about.skills"
                     :key="`skill-${ k }`"
                  >
                     <!-- Single skill -->
                     <skill :skill="skill" />
                     <!-- End Single skill -->
                  </template>
               </ul>
               <!-- End skills list -->
            </div>
         </div>
   </section>
</template>
