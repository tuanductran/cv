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
         <div class="grid grid-cols-1 lg:grid-cols-2 gap-7 my-10 md:my-14 lg:my-16">
            <!-- Personal information -->
            <div>
               <h2 class="font-bold mb-2">
                  Mục tiêu nghề nghiệp
               </h2>
               <p class="leading-relaxed mb-2 last:mb-0"  v-for="bio, k in about.bio" :key="`bio-${ k }`">
                  {{ bio }}
               </p>
            <!--
               <h2 class="font-bold mb-5">
                  Thông tin cá nhân
               </h2>
               <p class="leading-relaxed mb-4 last:mb-0"  v-for="personal_information, k in about.personal_information" :key="`personal_information-${ k }`">
                  {{ personal_information }}
               </p>
               <h2 class="font-bold mb-5">
                  Sở thích
               </h2>
               <ul class="mt-5 grid grid-cols-3 gap-8">
                  <template 
                     v-for="interest, k in about.interest"
                     :key="`interest-${ k }`"
                  >
                     <interest :interest="interest" />
                  </template>
               </ul>
            -->
               <!-- Contact info -->
               <h2 class="font-bold mb-2">
                  Thông tin liên hệ
               </h2>
               <!-- contacts info -->
               <p class="leading-relaxed mb-2 last:mb-0" v-for="contactinfo_birthday, k in about.contactinfo_birthday" :key="`contactinfo_birthday-${ k }`">
                  {{ contactinfo_birthday }}
               </p>
               <p class="leading-relaxed mb-2 last:mb-0" v-for="contactinfo_phone, k in about.contactinfo_phone" :key="`contactinfo_phone-${ k }`">
                  <a :href="`tel:${ contactinfo_phone }`">
                    <span class="text-main-color">{{ contactinfo_phone }}</span>
                  </a>
               </p>
               <p class="leading-relaxed mb-2 last:mb-0" v-for="contactinfo_email, k in about.contactinfo_email" :key="`contactinfo_email-${ k }`">
                  <a :href="`mailto:${ contactinfo_email }`">
                    <span class="text-main-color">{{ contactinfo_email }}</span>
                  </a>
               </p>
               <p class="leading-relaxed mb-2 last:mb-0" v-for="contactinfo_address, k in about.contactinfo_address" :key="`contactinfo_address-${ k }`">
                  <a :href="`https://www.google.com.vn/search?q=${ contactinfo_address }`" target="_blank">
                    <span class="text-main-color">{{ contactinfo_address }}</span>
                  </a>
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
