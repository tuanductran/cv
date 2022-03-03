<script setup>
	const props = defineProps({
		client: Object
	})	
</script>

<template>
   <div class="relative">
      <!-- Client thumbnail -->
      <img class="w-full rounded-xl" :src="`./assets/clients/${ client.thumbnail }`" :alt="client.title" loading="lazy" deasync="true">
      <!-- End Client thumbnail -->
   </div>
</template>
