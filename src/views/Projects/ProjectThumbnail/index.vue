<script setup>
	const props = defineProps({
		project: Object
	})	
</script>

<template>
  <figure>
     <img width="326" height="244" :src="`./assets/projects/${ project.thumbnail }`" :alt="project.title" loading="lazy" deasync="true" />
  </figure>
</template>
