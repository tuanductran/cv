<script setup>
	const props = defineProps({
		project: Object
	})	
</script>

<template>
   <div class="p-5">
    <a v-for="link, k in project.links" :href="link" :key="k" target="_blank" onClick="ga('event', 'ProjectLink', 'view', 'project_link');">
       <h5 class="mb-2 text-2xl font-bold tracking-tight">
          {{ project.title }}
       </h5>
    </a>
    <p class="mb-3 font-normal" v-for="description, k in project.description" :key="`description-${ k }`">
       {{ description }}
    </p>
    <a class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-vnodesign rounded-lg" :href="`${ project.sourceCodeUrl }`" target="_blank" onClick="ga('event', 'SourceCodeUrl', 'view', 'source_code_url');">
       Source code
    </a>
  </div>
</template>
