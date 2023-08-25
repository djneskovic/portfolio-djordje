<template>
	<div
		class="carousel-container"
		@touchstart="handleTouchStart"
		@touchmove="handleTouchMove"
		@touchend="handleTouchEnd"
	>
		<Carousel
			:itemsToShow="carouselItemsToShow"
			:wrapAround="true"
			:transition="500"
			:autoplay="2000"
		>
			<Slide v-for="slide in sites" :key="slide">
				<div class="carousel__item">
					<div class="image-container">
						<img :src="slide.img" alt="" />
					</div>
					<a :href="slide.link" class="mt-6 carousel-btn">{{
						slide.btnText
					}}</a>
				</div>
			</Slide>
		</Carousel>
	</div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
	name: "auto-play",
	components: {
		Carousel,
		Slide,
	},

	data() {
		return {
			sites: [
				{
					img: "/images/Aryen11.jpg",
					link: "#",
					btnText: "In Development",
				},
				{
					img: "/images/recipe.jpg",
					link: "https://recipe-app-by-djordje.netlify.app/mymeals",
					btnText: "Recipe App",
				},
				{
					img: "/images/weather.jpg",
					link: "https://weather-app-by-djordje.netlify.app/forecast",
					btnText: "Weather App",
				},
				{
					img: "/images/bmi.png",
					link: "https://bmi-calculator-by-djordje.netlify.app/",
					btnText: "BMI Calculator",
				},
				{
					img: "/images/bank.png",
					link: "https://bank-app-by-djordje.netlify.app/",
					btnText: "Bank App",
				},
			],
			touchStartX: 0,
			touchEndX: 0,
			mouseStartX: 0,
			mouseEndX: 0,
			swipeThreshold: 50,
			linkClicked: false, // Flag to track if the link was clicked
			isDragging: false, // Flag to track if the carousel is being dragged
			carouselItemsToShow: 1,
		};
	},

	methods: {
		getLinkForSlide(slide) {
			// Return the desired URL for each image
			// For example:
			if (slide === "/images/office.jpg") {
				return "https://example.com/link-for-office-image";
			} else if (slide === "/images/officeTwo.jpg") {
				return "https://example.com/link-for-officeTwo-image";
			} else if (slide === "/images/officeThree.jpg") {
				return "https://example.com/link-for-officeThree-image";
			}
			// If the slide doesn't match any specific link, you can return a default link
			return "https://example.com/default-link";
		},

		handleTouchStart(event) {
			this.touchStartX = event.changedTouches[0].clientX;
		},

		handleTouchMove(event) {
			this.touchEndX = event.changedTouches[0].clientX;
			this.isDragging = true; // User is actively dragging the carousel
		},

		handleTouchEnd() {
			const touchDiff = this.touchEndX - this.touchStartX;
			if (
				this.isDragging &&
				Math.abs(touchDiff) > this.swipeThreshold
			) {
				if (touchDiff < 0) {
					// Swiped left
				} else {
					// Swiped right
				}
			}
			this.touchStartX = 0;
			this.touchEndX = 0;
			this.isDragging = false; // Reset the isDragging flag
		},

		handleMouseDown(event) {
			this.mouseStartX = event.clientX;
			this.isDragging = true; // User started dragging with the mouse
		},

		handleMouseMove(event) {
			this.mouseEndX = event.clientX;
		},

		handleMouseUp() {
			const mouseDiff = this.mouseEndX - this.mouseStartX;
			if (
				this.isDragging &&
				Math.abs(mouseDiff) > this.swipeThreshold
			) {
				if (mouseDiff < 0) {
					// Swiped left
				} else {
					// Swiped right
				}
			}
			this.mouseStartX = 0;
			this.mouseEndX = 0;
			this.isDragging = false; // Reset the isDragging flag
		},

		handleLinkClick(event) {
			// Prevent the link navigation only if the user is not actively dragging
			if (!this.isDragging) {
				event.preventDefault();
			}
			this.linkClicked = true; // Set the linkClicked flag to true when the link is clicked
		},

		updateItemsToShow() {
			const screenWidth = window.innerWidth;
			if (screenWidth >= 781) {
				this.carouselItemsToShow = 2;
			} else {
				this.carouselItemsToShow = 1; // Show 1 item at a time for smaller devices (e.g., mobile)
			}
		},
	},

	created() {
		this.updateItemsToShow(); // Set initial value based on screen width
		window.addEventListener("resize", this.updateItemsToShow);
	},

	beforeUnmount() {
		window.removeEventListener("resize", this.updateItemsToShow);
	},
});
</script>
