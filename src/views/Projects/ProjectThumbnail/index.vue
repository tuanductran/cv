<script setup>
	const props = defineProps({
		project: Object
	})	
</script>

<template>
  <figure>
     <img class="max-h-screen" :src="`./assets/projects/${ project.thumbnail }`" :alt="project.title" loading="lazy" deasync="true" />
  </figure>
</template>
