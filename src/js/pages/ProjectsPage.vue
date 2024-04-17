<template>
	<main id="projects">
		<div class="container">
			<section class="projects">
				<!-- Carousel Real Projects -->
				<h2 class="text-center projects-title mb-4 md:mb-12">
					Real Time Projects
				</h2>
				<CarouselRealProjects />

				<!-- Carousel Apps -->
				<h2 class="text-center projects-title my-4 md:my-12">
					My Apps
				</h2>
				<CarouselItem />
				<!-- Carousel Games -->
				<h2 class="text-center projects-title my-4 md:my-12">
					My Games
				</h2>
				<CarouselItemGames />
			</section>

			<section class="reviews flex flex-col justify-center">
				<h2 class="reviews-title text-center">
					What My Clients Say
				</h2>

				<button-primary
					class="hire mt-16 mb-4 inline-block self-center"
					href="https://drive.google.com/file/d/10WQJSEbz8q1pItuXstWKogb3VHg1CwHK/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					download="Reference-Letter.pdf"
					>Reference letter</button-primary
				>

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
import CarouselRealProjects from "../components/CarouselRealProjects.vue";
import ReviewsPersons from "../components/ReviewsPersons.vue";
import ButtonPrimary from "../components/ButtonPrimary.vue";

export default {
	components: {
		CarouselItem,
		ReviewsPersons,
		CarouselItemGames,
		ButtonPrimary,
		CarouselRealProjects,
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
