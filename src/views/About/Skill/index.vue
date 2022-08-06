<script setup>
	const props = defineProps({
		skill: String
	})
</script>

<template>
   <p class="leading-relaxed mb-2 last:mb-0 text-color-body">
         <!-- Skill name -->
         {{ skill }}
         <!-- End Skill name -->
   </p>
</template>
