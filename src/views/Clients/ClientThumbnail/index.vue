<script setup>
	const props = defineProps({
		client: Object
	})	
</script>

<template>
   <figure>
      <img class="rounded-t-lg" :src="`./assets/clients/${ client.thumbnail }`" :alt="client.title" loading="lazy" deasync="true" />
   </figure>
</template>
