<script setup>
   const props = defineProps({
      title: String
   })
</script>

<template>
   <div class="flex items-center justify-center my-10 md:my-14 lg:my-16">
      <!-- Left bar -->
      <div class="block w-1/2 h-px bg-gray-300 dark:bg-title-dark"></div>
      <!-- End Left bar -->
      <!-- Section title -->
      <h1 class="whitespace-nowrap mx-3 uppercase font-bold text-xl md:text-2xl xl:text-3xl">
         {{ title }}
      </h1>
      <!-- End Section title -->
      <!-- Right bar -->
      <div class="block w-1/2 h-px bg-gray-300 dark:bg-title-dark"></div>
      <!-- End Right bar -->
   </div>
   <!-- Section content -->
   <slot />
   <!-- End Section content -->
</template>
