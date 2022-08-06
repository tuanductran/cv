<script setup>
	const props = defineProps({
		client: Object
	})	
</script>

<template>
   <div class="card-body">
    <h2 class="card-title">{{ client.title }}</h2>
    <p>
       <a class="text-xs lg:text-base text-main-color" v-for="link, k in client.links" :href="link" :key="k" target="_blank" onClick="ga('event', 'ClientLink', 'view', 'client_link');">
           <strong>{{ link }}</strong>
       </a>
    </p>
    <p class="leading-relaxed text-left text-color-body dark:text-white text-sm xl:text-base" v-for="description, k in client.description" :key="`description-${ k }`">
          {{ description }}
    </p>
    <div class="card-actions justify-end">
      <div class="badge bg-vnodesign !text-white p-3" v-for="tech, k in client.builtWidth" :key="k">
          {{ tech }}
      </div>
    </div>
  </div>
</template>
