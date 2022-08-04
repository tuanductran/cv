<script setup>
	const props = defineProps({
		project: Object
	})	
</script>

<template>
     <img :src="`./assets/projects/${ project.thumbnail }`" :alt="project.title" loading="lazy" deasync="true">
</template>
