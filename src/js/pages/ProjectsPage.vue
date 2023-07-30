<template>
	<main id="projects">
		<div class="container">
			<div class="projects">
				<h2 class="text-center projects-title mb-12">My Work</h2>

				<CarouselItem />
			</div>
		</div>
	</main>
</template>

<script>
import CarouselItem from "../components/CarouselItem.vue";
export default {
	components: {
		CarouselItem,
	},
};
</script>
