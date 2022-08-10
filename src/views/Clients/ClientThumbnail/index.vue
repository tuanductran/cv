<script setup>
	const props = defineProps({
		client: Object
	})	
</script>

<template>
   <figure class="h-60">
      <img :src="`./assets/clients/${ client.thumbnail }`" :alt="client.title" loading="lazy" deasync="true" />
   </figure>
</template>
