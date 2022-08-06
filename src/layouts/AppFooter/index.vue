<script setup>
   const year = new Date().getFullYear()
</script>

<template>
	<footer class="flex justify-center relative py-5 bg-white bg-opacity-70 mt-20">
			<p class="text-color-body dark:text-white text-sm mt-5 mb-5">
				Được tạo bằng cả <i class="fa fa-heart"></i> <span class="dot">·</span> Xây dựng và bảo trì bởi <strong><a href="https://github.com/vnodesign" target="_blank" title="VNO Design">VNO Design</a></strong>
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
