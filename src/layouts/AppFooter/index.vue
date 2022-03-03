<script setup>
   const year = new Date().getFullYear()
</script>

<template>
	<footer class="flex justify-center relative py-5 bg-white dark:bg-footer-dark bg-opacity-70 mt-20">
			<p class="text-color-body dark:text-white text-sm mt-5 mb-5">
				Made with <i class="fa fa-heart"></i> <span class="dot">·</span> Powered by <strong><a href="https://tuanducdesign.com" target="_blank" title="Tuan Duc Design">Tuan Duc Design</a></strong>
			</p>
	</footer>
</template>
<style lang="scss">
footer {
	.fa-heart {
		color: red;
	}
}
</style>
