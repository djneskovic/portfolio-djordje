<template>
	<div class="exp-item flex flex-col justify-center">
		<h3 class="text-start">{{ title }}</h3>

		<p class="text-grey">{{ desc }}</p>

		<div class="line">
			<div class="skill"></div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		desc: String,
	},
};
</script>
