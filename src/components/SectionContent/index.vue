<script setup>
   const props = defineProps({
      title: String,
      order: String
   })
</script>

<template>
   <div class="flex flex items-center justify-center py-10 md:py-14 lg:py-16 mt-12">
      <!-- Left bar -->
      <div class="block w-1/2 h-px bg-gray-300 dark:bg-gray-800"></div>
      <!-- End Left bar -->
      
      <!-- Section title -->
      <h1 class="whitespace-nowrap mx-3 uppercase font-bold text-xl md:text-2xl xl:text-3xl">
         <span class="text-main-color font-bold mr-3">0{{ order }}.</span>
         <strong>{{ title }}</strong>
      </h1>
      <!-- End Section title -->

      <!-- Right bar -->
      <div class="block w-1/2 h-px bg-gray-300 dark:bg-gray-800"></div>
      <!-- End Right bar -->
   </div>

   <!-- Section content -->
   <slot />
   <!-- End Section content -->
</template>