<script setup>
	const props = defineProps({
		contacts: String
	})
</script>

<template>
   <li>
      <h3 class="flex">
         <!-- contacts name -->
         <span class="text-sm font-bold">
            {{ contacts }}
         </span>
         <!-- End contacts name -->
      </h3>
   </li>
</template>