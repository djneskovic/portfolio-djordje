<template>
	<div class="service-item flex flex-col items-center justify-center">
		<div class="service-item_image">
			<img :src="imageSrc" alt="" />
		</div>

		<div
			class="service-item_context flex flex-col items-center justify-center"
		>
			<h3>
				{{ title }}
			</h3>
			<p class="text-grey">
				{{ desc }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		imageSrc: String,
		title: String,
		desc: String,
	},
};
</script>
