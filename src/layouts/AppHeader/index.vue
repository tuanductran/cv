<script setup>
   import { inject, ref, computed } from "@vue/runtime-core"

   const isCollapsed = ref(true)
   const isDark = ref(true)

   // extract some keys from the infos.json
   const { navbar: { links, logo }, sections: { intro }} = inject('infos')
   
   const handleLogo = computed(() => {
      return `./assets/${ !isDark.value ? logo.dark : logo.light }`
   })

   function toggleMode () {
      isDark.value = !isDark.value
      document.documentElement.classList.toggle('dark')
   }
</script>

<template>
   <nav class="fixed z-20 top-0 left-0 right-0 blured-background py-3 lg:py-4 shadow-sm">
      <div class="flex items-center container mx-auto px-5 md:px-9 lg:px-16 xl:px-36 2xl:px-52">
      	<!-- Logo -->
         <a href="#intro">
      		<img class="w-3/4" :src="handleLogo" :alt="`${ intro.fullname } logo`">
      	</a>
         <!-- End Logo -->

         <!-- Three bars menu (only apears on mobile) -->
         <button @click="isCollapsed =! isCollapsed" class="ml-auto md:hidden">
            <i v-if="isCollapsed" class="fa fa-bars"></i>
            <i v-else class="fa fa-times"></i>
         </button>
         <!-- End three bars menu -->

         <!-- Navbar menu -->
      	<ul
            class="
               bg-white dark:bg-gray-800 transition-transform absolute md:relative top-0 left-0 h-screen
               md:h-auto w-3/4 md:w-auto p-5 md:p-0 md:flex md:bg-transparent md:dark:bg-transparent md:transform-none items-center ml-auto
            "

            :class="{ 'transform -translate-x-full': isCollapsed }"
         >
            <!-- Menu links -->
      		<li
      			class="flex items-center ml-4 lg:ml-9 mb-3 md:mb-0"
      			v-for="label, anchor in links"
      			:key="anchor"
      		>
      			<a
                  class="font-bold text-md md:text-xs lg:text-md" :href="`${ anchor }`">
      				<span class="ml-2">{{ label }}</span>
      			</a>
      		</li>
            <!-- End menu links -->

            <!-- Dark/Light mode toggle button -->
            <li @click="toggleMode" class="ml-4 lg:ml-9 cursor-pointer">
               <i class="far fa-moon"></i>
            </li>
            <!-- End toogle button -->
      	</ul>
         <!-- End Navbar menu -->
      </div>
   </nav>
</template>

<style>
   .blured-background {
      @apply backdrop-filter backdrop-blur-sm bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-50;
   }
</style>