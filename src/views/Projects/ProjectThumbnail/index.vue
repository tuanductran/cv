<script setup>
	const props = defineProps({
		project: Object
	})	
</script>

<template>
  <figure>
     <img class="aspect-video" :src="`./assets/projects/${ project.thumbnail }`" :alt="project.title" loading="lazy" deasync="true" />
  </figure>
</template>
