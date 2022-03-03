<script setup>
	const props = defineProps({
		interest: String
	})
</script>

<template>
   <li>
      <h3 class="capitalize flex">
         <!-- interest name -->
         <span class="text-sm font-bold transition-colors duration-1000">
            {{ interest }}
         </span>
         <!-- End interest name -->
      </h3>
   </li>
</template>
