<script setup>
	const props = defineProps({
		project: Object
	})	
</script>

<template>
   <figcaption class="mt-3 md:mt-0 z-10">
      <!-- Project title -->
      <h2 class="text-2xl xl:text-4xl 2xl:text-2xl font-bold mb-3 xl:mb-6 2xl:mb-3">
         {{ project.title }}
      </h2>
      <!-- End Project title -->
      
      <!-- Project descript -->
      <div class="rounded-lg mb-3 md:bg-white dark:md:bg-gray-800 dark:md:bg-opacity-60 md:p-5 dark:shadow-2xl">
         <p class="leading-relaxed text-left text-gray-500 dark:text-gray-400 text-sm xl:text-base">
            {{ project.description }}
         </p>
      </div>
      <!-- End Project descript -->

      <!-- Project technologies -->
      <ul class="flex mt-5">
         <li
            class="text-xs lg:text-base text-main-color rounded-full mr-7 last:mr-0"
            v-for="tech, k in project.builtWidth"
            :key="k"
         >{{ tech }}</li>
      </ul>
      <!-- End Project technologies -->
   </figcaption>
</template>