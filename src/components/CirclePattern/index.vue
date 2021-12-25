<script setup>
	const props = defineProps({
		size: {
			type: String,
			default: 'w-56 h-56'
		},

		position: {
			type: String,
			default: 'left-0 top-0'
		}
	})
</script>

<template>
	<!-- Outer circle -->
	<div class="
			absolute border-2 border-gray-200 z-[-40] p-[2%]
			dark:border-gray-700 dark:border-opacity-20 rounded-full
		"
		:class="position"
	>

		<!-- Inner circle -->
		<div class="
				bg-gray-200 bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-20
				dark:bg-opacity-30 rounded-full
			"
			:class="size"
		></div>
		<!-- End Inner circle -->
	</div>
	<!-- End Outer circle -->
</template>