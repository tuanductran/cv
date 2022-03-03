<script setup>
	const props = defineProps({
		skill: String
	})
</script>

<template>
   <li>
      <h3 class="capitalize flex">
         <!-- Skill name -->
         <span class="text-sm font-bold">
            {{ skill }}
         </span>
         <!-- End Skill name -->
      </h3>
   </li>
</template>
