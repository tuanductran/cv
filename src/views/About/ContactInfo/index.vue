<script setup>
	const props = defineProps({
		contacts: String
	})
</script>

<template>
   <li>
      <h3 class="flex">
         <!-- contacts name -->
         <span class="text-sm font-bold transition-colors duration-1000">
            {{ contacts }}
         </span>
         <!-- End contacts name -->
      </h3>
   </li>
</template>
