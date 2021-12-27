<script setup>
	const props = defineProps({
		project: Object
	})	
</script>

<template>
   <div class="relative">
      <!-- Project thumbnail -->
      <img class="w-full rounded-xl" :src="`./assets/projects/${ project.thumbnail }`" :alt="project.title" loading="lazy" deasync="true">
      <!-- End Project thumbnail -->
   </div>
</template>