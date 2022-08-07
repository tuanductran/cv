<script setup>
	const props = defineProps({
		project: Object
	})	
</script>

<template>
   <div class="card-body">
    <h2 class="card-title">
       {{ project.title }}
    </h2>
    <p class="text-xs lg:text-base" v-for="link, k in project.links" :key="k">
           <strong>{{ link }}</strong>
    </p>
    <p class="leading-relaxed text-left text-sm xl:text-base" v-for="description, k in project.description" :key="`description-${ k }`">
          {{ description }}
    </p>
  </div>
</template>
