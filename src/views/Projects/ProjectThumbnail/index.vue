<script setup>
	const props = defineProps({
		project: Object
	})	
</script>

<template>
  <figure class="h-60">
     <img :src="`./assets/projects/${ project.thumbnail }`" :alt="project.title" loading="lazy" deasync="true" />
  </figure>
</template>
