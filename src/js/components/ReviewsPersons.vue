<template>
	<div class="reviews-item flex flex-col items-center justify-center">
		<i class="fas fa-quote-left text-green quotes"></i>
		<div class="reviews-item__image">
			<img :src="imageSrc" alt="" />
		</div>
		<p class="text-grey">
			{{ desc }}
		</p>
		<div class="line"></div>
		<h3 class="text-gold">{{ title }}</h3>
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
