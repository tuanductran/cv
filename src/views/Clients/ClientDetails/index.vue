<script setup>
	const props = defineProps({
		client: Object
	})	
</script>

<template>
   <div class="p-5">
    <a v-for="link, k in client.links" :href="link" :key="k" target="_blank" onClick="ga('event', 'ClientLink', 'view', 'client_link');">
      <h5 class="mb-2 text-2xl font-bold tracking-tight">
          {{ client.title }}
      </h5>
    </a>
    <p class="mb-3 font-normal" v-for="description, k in client.description" :key="`description-${ k }`">
          {{ description }}
    </p>
    <div class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-vnodesign rounded-lg" v-for="tech, k in client.builtWidth" :key="k">
          {{ tech }}
    </div>
  </div>
</template>
