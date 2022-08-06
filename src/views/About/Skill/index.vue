<script setup>
	const props = defineProps({
		skill: String
	})
</script>

<template>
   <p class="leading-relaxed font-bold text-color-body dark:text-white">
         <!-- Skill name -->
         {{ skill }}
         <!-- End Skill name -->
   </p>
</template>
