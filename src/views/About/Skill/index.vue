<script setup>
	const props = defineProps({
		skill: String,
		level: String
	})
</script>

<template>
   <li data-aos="fade-right">
      <h3 class="capitalize flex">
         <!-- Skill name -->
         <span class="text-sm font-bold">
            {{ skill }}
         </span>
         <!-- End Skill name -->
         <!-- Skill level -->
         <span class="ml-auto text-sm font-light">
            {{ level }}
         </span>
         <!-- End Skill level -->
      </h3>
      <!-- Progress bar -->
      <div class="h-1 mt-2 bg-gray-500 dark:bg-gray-800 relative">
         <div class="h-1 bg-main-color absolute" :style="`width: ${ level }`"></div>
      </div>
      <!-- End Prograss bar -->
   </li>
</template>