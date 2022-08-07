<script setup>
   import { inject } from '@vue/runtime-core'
   import Skill from './Skill/index.vue'
   // import Interest from './Interest/index.vue'
   import Contacts from './ContactInfo/index.vue'

   /*
      extract the about section from the "sections" key in the json file
      containing the data
   */
   const { sections: { about }} = inject('infos')
</script>

<template>
   <section id="cv">
         <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10 md:my-14 lg:my-16">
            <!-- Personal information -->
            <div>
               <h2 class="font-bold mb-2">
                  Mục tiêu nghề nghiệp
               </h2>
               <p class="leading-relaxed mb-2 last:mb-0"  v-for="bio, k in about.bio" :key="`bio-${ k }`">
                  {{ bio }}
               </p>
               <!-- Contact info -->
               <h2 class="font-bold mb-2">
                  Thông tin liên hệ
               </h2>
               <!-- contacts info -->
               <p class="leading-relaxed mb-2 last:mb-0" v-for="contactinfo_birthday, k in about.contactinfo_birthday" :key="`contactinfo_birthday-${ k }`">
                  {{ contactinfo_birthday }}
               </p>
               <p class="leading-relaxed mb-2 last:mb-0" v-for="contactinfo_phone, k in about.contactinfo_phone" :key="`contactinfo_phone-${ k }`">
                  {{ contactinfo_phone }}
               </p>
               <p class="leading-relaxed mb-2 last:mb-0" v-for="contactinfo_email, k in about.contactinfo_email" :key="`contactinfo_email-${ k }`">
                  {{ contactinfo_email }}
               </p>
               <p class="leading-relaxed mb-2 last:mb-0" v-for="contactinfo_address, k in about.contactinfo_address" :key="`contactinfo_address-${ k }`">
                  {{ contactinfo_address }}
               </p>
            </div>
            <div>
            <!-- Skills -->
               <h2 class="font-bold mb-2">
                  Kỹ năng
               </h2>
               <!-- Skills list -->
               <template 
                     v-for="skill, k in about.skills"
                     :key="`skill-${ k }`"
                  >
                     <!-- Single skill -->
                     <skill :skill="skill" />
                     <!-- End Single skill -->
               </template>
               <!-- End skills list -->
               <!-- Certificate -->
               <h2 class="font-bold mb-2">
                  Chứng chỉ
               </h2>
               <p class="leading-relaxed mb-2 last:mb-0" v-for="certification, k in about.certification" :key="`certification-${ k }`">
                  {{ certification }}
               </p>
            </div>
         </div>
   </section>
</template>
