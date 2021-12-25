<script setup>
   import { inject, computed } from '@vue/runtime-core'

   const { navbar: { logo }, sections: { intro, contact }} = inject('infos')
   
   const handleLogo = computed(() => {
      const root = document.documentElement
      const isDark = root.classList.contains('dark')

      return `./assets/${ !isDark ? logo.dark : logo.light }`
   })
</script>

<template>
   <section id="contact" class="mt-20 py-10 md:py-14 lg:py-16">
      <div class="mb-8">
         <!-- Logo -->
         <img class="mx-auto" :src="handleLogo" :alt="`${ intro.fullname } logo`">
         <!-- End Logo -->

         <h1 class="text-center mt-5 leading-relaxed md:w-3/4 lg:w-1/2 mx-auto text-gray-600 dark:text-gray-400">
            Hộp thư đến của tôi luôn mở. Cho dù bạn có câu hỏi hay chỉ muốn nói xin chào, tôi sẽ cố gắng hết sức để liên hệ lại với bạn!
         </h1>
      </div>
      <!-- Social links -->
      <ul class="flex mt-5 w-max mx-auto">
         <!-- Email icon -->
         <li class="group w-9 h-9 text-sm border border-main-color rounded-full center-element mr-3 transition-all hover:bg-main-color">
            <a aria-label="Send Mail" :href="`mailto:${ contact.email }`" class="text-main-color group-hover:text-white dark:group-hover:text-gray-800">
               <i class="far fa-envelope"></i>
            </a>
         </li>
         <!-- End Email icon -->
         <!-- Social media icons -->
         <li class="group w-9 h-9 text-sm border border-main-color rounded-full center-element mr-3 last:mr-0 transition-all hover:bg-main-color" v-for="link, icon in contact.social" :key="icon"
         >
            <a class="text-main-color group-hover:text-white dark:group-hover:text-gray-800" :href="link" :aria-label="`${ icon } logo`" >
               <i :class="`fab fa-${ icon }`"></i>
            </a>
         </li>
         <!-- End Social media icons -->
      </ul>
   </section>
</template>