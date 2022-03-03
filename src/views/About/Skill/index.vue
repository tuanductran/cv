<script setup>
	const props = defineProps({
		skill: String
	})
</script>

<template>
   <li>
      <h3 class="capitalize flex">
         <!-- Skill name -->
         <span class="text-sm font-bold transition-colors duration-1000">
            {{ skill }}
         </span>
         <!-- End Skill name -->
      </h3>
   </li>
</template>
