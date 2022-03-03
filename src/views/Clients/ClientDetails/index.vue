<script setup>
	const props = defineProps({
		client: Object
	})	
</script>

<template>
   <figcaption class="mt-3 md:mt-0 z-10">
      <!-- Client title -->
      <h2 class="text-2xl xl:text-4xl 2xl:text-2xl font-bold mb-3 xl:mb-6 2xl:mb-3">
         {{ client.title }}
      </h2>
      <!-- End Client title -->
      <p>
         <a class="text-xs lg:text-base text-main-color" v-for="link, k in client.links" :href="link" :key="k" target="_blank" onClick="ga('event', 'ClientLink', 'view', 'client_link');">
            <strong>{{ link }}</strong>
         </a>
      </p>
      <!-- Client descript -->
      <div class="rounded-lg mb-3 bg-white dark:bg-product-dark p-5 mt-5 vnodesign-border dark:vnodesign-border">
         <p class="leading-relaxed text-left text-color-body dark:text-white text-sm xl:text-base"  v-for="description, k in client.description" :key="`description-${ k }`">
            {{ description }}
         </p>
      </div>
      <!-- End Client descript -->

      <!-- Client technologies -->
      <ul class="flex mt-5">
         <li
            class="text-xs lg:text-base text-main-color rounded-full mr-7 last:mr-0"
            v-for="tech, k in client.builtWidth"
            :key="k"
         ><strong>{{ tech }}</strong></li>
      </ul>
      <!-- End Client technologies -->
   </figcaption>
</template>
