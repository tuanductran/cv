<script setup>
	const props = defineProps({
		client: Object
	})	
</script>

<template>
   <div class="card-body">
    <h2 class="card-title">{{ client.title }}</h2>
    <p class="text-xs lg:text-base" v-for="link, k in client.links" :key="k">
          <strong>{{ link }}</strong>
    </p>
    <p class="leading-relaxed text-left text-sm xl:text-base" v-for="description, k in client.description" :key="`description-${ k }`">
          {{ description }}
    </p>
  </div>
</template>
