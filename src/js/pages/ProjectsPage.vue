<template>
	<main id="projects">
		<div class="container">
			<section class="projects">
				<h2 class="text-center projects-title mb-12">My Apps</h2>

				<CarouselItem />
				<h2 class="text-center projects-title my-12">My Games</h2>

				<CarouselItemGames />
			</section>

			<section class="reviews">
				<h2 class="reviews-title text-center">
					What My Clients Say
				</h2>
				<div
					class="flex flex-col items-center justify-center md:flex-row md:gap-4 lg:gap-8 gap-8 mt-12"
				>
					<ReviewsPersons
						v-for="item in reviewsItem"
						:key="item.title"
						:image-src="item.imageSrc"
						:title="item.title"
						:desc="item.desc"
					/>
				</div>
			</section>
		</div>
	</main>
</template>

<script>
import CarouselItem from "../components/CarouselItem.vue";
import CarouselItemGames from "../components/CarouselItemGames.vue";
import ReviewsPersons from "../components/ReviewsPersons.vue";
export default {
	components: {
		CarouselItem,
		ReviewsPersons,
		CarouselItemGames,
	},

	data() {
		return {
			reviewsItem: [
				{
					imageSrc: "/images/ognjen.jpg",
					title: "Ognjen K.",
					desc: "The front-end developing service provided exceptional website designs with seamless functionality.",
				},
				{
					imageSrc: "/images/marko.jpg",
					title: "Marko S.",
					desc: "The Vue developer service delivered efficient and user-friendly web applications with responsive designs.",
				},
				{
					imageSrc: "/images/masa.jpg",
					title: "Maša G.",
					desc: "The video editing service produced high-quality videos with impressive visual effects and smooth transitions.",
				},
			],
		};
	},
};
</script>
