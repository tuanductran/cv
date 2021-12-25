<script setup>
   import { inject } from '@vue/runtime-core'
   const { sections: { intro }} = inject('infos')
</script>

<template>
   <div class="relative rounded-full border-gray-300 order-1 dark:border-gray-700 dark:border-opacity-50 border p-4 lg:p-7 xl:p-9">
      <!-- Avatar -->
      <div class="relative rounded-full border-gray-300 dark:border-gray-700 dark:border-opacity-50 border p-4 lg:p-7 xl:p-9">
         <img class="w-full rounded-full" :alt="`${ intro.fullname } photo`" :src="`./assets/${ intro.avatar }`" loading="lazy">
      </div>
      <!-- End avatar -->
      <!-- Technologies -->
      <!-- <ul class="absolute top-0 left-0 w-full h-full rounded-full">
         <li
            class="
               skill flex items-center justify-center absolute bg-white bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-40
               backdrop-filter backdrop-blur rounded-full shadow-2xl
            "
            v-for="skill, k in intro.techs"
            :key="skill" :title="skill"
         >
            <img
               :src="`./assets/technologies/${ skill }.svg`"
               :alt="`${ skill } logo`" loading="lazy"
            >
         </li>
      </ul> -->
      <!-- End technologies -->
   </div>
</template>

<style lang="scss" scoped>
   // .skill {
   //    // Vue js
   //    &:nth-of-type(1) {
   //       @apply w-10 p-2 top-0 left-16;

   //       @screen lg {
   //          @apply w-14 p-3 top-0 left-16;
   //       }

   //       @screen xl {
   //          @apply w-16 p-4 top-5 left-16;
   //       }
   //    };

   //    // Figma
   //    &:nth-of-type(2) {
   //       @apply w-14 p-3 top-2 right-10;

   //       @screen lg {
   //          @apply w-14 p-3 top-1 right-12;
   //       }

   //       @screen xl {
   //          @apply w-16 p-3 top-1 right-20;
   //       }
   //    };

   //    // React js
   //    &:nth-of-type(3) {
   //       @apply w-14 p-3 top-36 -right-2;

   //       @screen lg {
   //          @apply w-16 p-4 top-40 -right-6;
   //       }

   //       @screen xl {
   //          @apply w-24 p-6 top-52 -right-8;
   //       }
   //    };

   //    // Sketch
   //    &:nth-of-type(4) {
   //       @apply w-16 p-4 bottom-0 left-32;

   //       @screen lg {
   //          @apply w-20 p-4 bottom-0 left-1/2;
   //       }
         
   //       @screen xl {
   //          @apply w-32 p-9 bottom-0 left-1/2;
   //       }
   //    };

   //    // Sass
   //    &:nth-of-type(5) {
   //       @apply w-8 p-2 top-24 -left-2;

   //       @screen lg {
   //          @apply w-12 p-2 top-36 -left-4;
   //       }

   //       @screen xl {
   //          @apply w-14 p-3 top-52 -left-4;
   //       }
   //    };

   //    // Tailwind
   //    &:nth-of-type(6) {
   //       @apply w-12 p-2 bottom-14 left-2;

   //       @screen lg {
   //          @apply w-12 p-2 bottom-16 left-2;
   //       }

   //       @screen xl {
   //          @apply w-16 p-3 bottom-16 left-14;
   //       }
   //    };
   // }
</style>