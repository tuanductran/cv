<script setup>
	const props = defineProps({
		project: Object
	})	
</script>

<template>
  <figure>
     <img class="rounded-t-lg" :src="`./assets/projects/${ project.thumbnail }`" :alt="project.title" loading="lazy" deasync="true" />
  </figure>
</template>
