<script setup>
	const props = defineProps({
		project: Object
	})	
</script>

<template>
   <figcaption class="mt-3 md:mt-0 z-10">
      <!-- Project title -->
      <h2 class="text-2xl xl:text-4xl 2xl:text-2xl font-bold mb-3 xl:mb-6 2xl:mb-3 transition-colors duration-1000">
         {{ project.title }}
      </h2>
      <!-- End Project title -->
      <p>
         <a class="text-xs lg:text-base text-main-color transition-colors duration-1000" v-for="link, k in project.links" :href="link" :key="k" target="_blank" onClick="ga('event', 'ProjectLink', 'view', 'project_link');">
            <strong>{{ link }}</strong>
         </a>
      </p>
      <!-- Project descript -->
      <div class="rounded-lg mb-3 bg-white dark:bg-product-dark p-5 mt-5 vnodesign-border dark:vnodesign-border transition-colors duration-1000">
         <p class="leading-relaxed text-left text-color-body dark:text-white text-sm xl:text-base"  v-for="description, k in project.description" :key="`description-${ k }`">
            {{ description }}
         </p>
      </div>
      <!-- End Project descript -->

      <!-- Project technologies -->
      <ul class="flex mt-5">
         <li
            class="text-xs lg:text-base text-main-color rounded-full mr-7 last:mr-0 transition-colors duration-1000"
            v-for="tech, k in project.builtWidth"
            :key="k"
         ><strong>{{ tech }}</strong></li>
      </ul>
      <!-- End Project technologies -->
   </figcaption>
</template>
