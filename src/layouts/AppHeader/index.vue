<script setup>
   import { inject, ref, computed } from "@vue/runtime-core"

   const isCollapsed = ref(true)
   const isDark = ref(true)

   // extract some keys from the infos.json
   const { navbar: { links }, sections: { intro }} = inject('infos')


   function toggleMode () {
      isDark.value = !isDark.value
      document.documentElement.classList.toggle('dark')
   }
   function toggleCollapse () {
      isCollapsed.value = !isCollapsed.value
      document.documentElement.classList.toggle('vn-collapsed')
   }
</script>

<template>
   <nav class="fixed dark:fixed z-20 top-0 left-0 right-0 bg-white dark:bg-navbar-dark py-3 lg:py-4 shadow-sm">
      <div class="flex items-center container mx-auto px-5 md:px-9 lg:px-16 xl:px-36 2xl:px-52">
         <!-- Dark/Light mode toggle button -->
         <button @click="toggleMode" class="mr-auto md:hidden">
            <i v-if="isDark" class="fa fa-sun-o"></i>
            <i v-else class="fa fa-moon-o"></i>
         </button>
         <!-- End toogle button -->
         <!-- Three bars menu (only apears on mobile) -->
         <button @click="toggleCollapse" class="ml-auto md:hidden">
            <i v-if="isCollapsed" class="fa fa-bars"></i>
            <i v-else class="fa fa-times"></i>
         </button>
         <!-- End three bars menu -->
         <!-- Navbar menu -->
      	<ul class="bg-white dark:bg-navbar-dark transition-transform absolute md:relative top-0 left-0 h-screen md:h-auto w-3/4 md:w-auto p-5 md:p-0 md:flex md:bg-transparent md:dark:bg-transparent md:transform-none items-center mr-auto vnodesign-border-navbar dark:vnodesign-border-navbar" :class="{ 'transform -translate-x-full': isCollapsed }">
            <!-- Menu links -->
      		<li class="flex items-center ml-4 lg:ml-9 mb-3 md:mb-0" v-for="label, anchor in links" :key="anchor">
      			<a class="font-bold text-md md:text-xs lg:text-md" :href="`${ anchor }`" onClick="ga('event', 'MenuLink', 'view', 'menu_link');">
      				<span class="ml-2">{{ label }}</span>
      			</a>
      		</li>
            <!-- End menu links -->
      	</ul>
         <!-- End Navbar menu -->
         <!-- Dark/Light mode toggle button -->
         <button @click="toggleMode" class="ml-auto hidden lg:flex">
            <i v-if="isDark" class="fa fa-sun-o"></i>
            <i v-else class="fa fa-moon-o"></i>
         </button>
         <!-- End toogle button -->
      </div>
   </nav>
</template>
