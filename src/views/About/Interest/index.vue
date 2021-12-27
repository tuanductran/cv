<script setup>
	const props = defineProps({
		interest: String
	})
</script>

<template>
   <li data-aos="fade-right">
      <h3 class="capitalize flex">
         <!-- interest name -->
         <span class="text-sm font-bold">
            {{ interest }}
         </span>
         <!-- End interest name -->
      </h3>
   </li>
</template>