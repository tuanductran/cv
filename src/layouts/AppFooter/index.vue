<script setup>
   const year = new Date().getFullYear()
</script>

<template>
	<footer class="flex justify-center relative py-5 bg-white dark:bg-gray-800 bg-opacity-70">
		<!-- Arrow top (back to top) -->
		<a class="center-element rounded-full mx-auto absolute -top-5 w-10 h-10 border-2 bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-900" role="button" href="#intro" aria-label="Go to top">
			<i class="fa fa-arrow-up"></i>
		</a>
		<!-- End arrow top -->
		<div>
			<p class="text-gray-500 dark:text-gray-400 text-sm mt-5">
				<strong>Tuan Duc Design</strong> &copy; {{ year }} All rights reserved
			</p>
		</div>
	</footer>
</template>