<script setup>
	const props = defineProps({
		project: Object
	})	
</script>

<template>
  <figure>
     <img class="h-60" :src="`./assets/projects/${ project.thumbnail }`" :alt="project.title" loading="lazy" deasync="true" />
  </figure>
</template>
