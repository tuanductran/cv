<script setup>
	const props = defineProps({
		project: Object
	})	
</script>

<template>
   <div class="card-body">
    <h2 class="card-title">
       {{ project.title }}
       <a class="badge badge-outline p-3" :href="`${ project.sourceCodeUrl }`" target="_blank" onClick="ga('event', 'SourceCodeUrl', 'view', 'source_code_url');">Source code</a>
    </h2>
    <p>
       <a class="text-xs lg:text-base text-main-color" v-for="link, k in project.links" :href="link" :key="k" target="_blank" onClick="ga('event', 'ProjectLink', 'view', 'project_link');">
           <strong>{{ link }}</strong>
       </a>
    </p>
    <p class="leading-relaxed text-left text-color-body dark:text-white text-sm xl:text-base" v-for="description, k in project.description" :key="`description-${ k }`">
          {{ description }}
    </p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline p-3" v-for="tech, k in project.builtWidth" :key="k">
          {{ tech }}
      </div>
    </div>
  </div>
</template>
