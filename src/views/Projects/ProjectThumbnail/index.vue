<script setup>
	const props = defineProps({
		project: Object
	})	
</script>

<template>
   <div class="relative">
      <!-- Project thumbnail -->
      <img
         class="w-full rounded-xl"
         :src="`./assets/projects/${ project.thumbnail }`"
         :alt="project.title" loading="lazy"
      >
      <!-- End Project thumbnail -->

      <!-- Project links (source & demo) -->
      <div class="absolute top-1 left-1 bg-white px-2 rounded-full">
         <a
            class="text-gray-800 text-xs first:mr-4"
            v-for="link, icon in project.links"
            :key="icon" :href="link"
            :aria-label="`${ icon === 'code' ? 'Code source' : 'Demo link' }`"
         >
            <i :class="`fa fa-${ icon }`"></i>
         </a>
      </div>
      <!-- End Project links (source & demo) -->
   </div>
</template>