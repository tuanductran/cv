<script setup>
	const props = defineProps({
		client: Object
	})	
</script>

<template>
   <div class="relative">
      <!-- Client thumbnail -->
      <img class="w-full rounded-xl" :src="`./assets/clients/${ project.thumbnail }`" :alt="project.title" loading="lazy" deasync="true">
      <!-- End Client thumbnail -->
   </div>
</template>