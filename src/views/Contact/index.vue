<script setup>
   import { inject } from '@vue/runtime-core'

   const { sections: { contact }} = inject('infos')
</script>

<template>
   <section id="contact" class="mt-20 py-10 md:py-14 lg:py-16">
      <!-- Social links -->
      <ul class="flex mt-5 w-max mx-auto">
         <!-- Email icon -->
         <li class="group w-9 h-9 text-sm border border-main-color rounded-full center-element mr-3 transition-all hover:bg-main-color transition-colors duration-1000">
            <a aria-label="Send Mail" :href="`mailto:${ contact.email }`" class="text-main-color group-hover:text-white dark:group-hover:text-gray-800">
               <i class="fa fa-envelope"></i>
            </a>
         </li>
         <!-- End Email icon -->
         <!-- Social media icons -->
         <li class="group w-9 h-9 text-sm border border-main-color rounded-full center-element mr-3 last:mr-0 transition-all hover:bg-main-color transition-colors duration-1000" v-for="link, icon in contact.social" :key="icon"
         >
            <a class="text-main-color group-hover:text-white dark:group-hover:text-gray-800" :href="link" :aria-label="`${ icon } logo`" >
               <i :class="`fa fa-${ icon }`"></i>
            </a>
         </li>
         <!-- End Social media icons -->
      </ul>
   </section>
</template>
