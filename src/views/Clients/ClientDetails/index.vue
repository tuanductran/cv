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
    <div class="bg-vnodesign border border-vnodesign-color text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded" v-for="tech, k in client.builtWidth" :key="k">
          {{ tech }}
    </div>
  </div>
</template>
