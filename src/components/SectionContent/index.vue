<script setup>
   const props = defineProps({
      title: String
   })
</script>

<template>
   <div class="flex py-10 md:py-14 lg:py-16 mt-8">
      <!-- Section title -->
      <h1 class="whitespace-nowrap mx-3 uppercase font-bold text-xl md:text-2xl xl:text-3xl">
         {{ title }}
      </h1>
      <!-- End Section title -->
   </div>
   <!-- Section content -->
   <slot />
   <!-- End Section content -->
</template>
