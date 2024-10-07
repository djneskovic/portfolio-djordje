<template>
	<main id="service">
		<div class="container">
			<section class="service-page">
				<h2 class="text-center service-title">
					What Services I'm Providing
				</h2>

				<div
					class="service-items flex flex-col items-center lg:items-start justify-center lg:flex-row gap-8 lg:gap-12"
				>
					<ServiceItem
						v-for="item in serviceItems"
						:key="item.title"
						:image-src="item.imageSrc"
						:title="item.title"
						:desc="item.description"
					/>
				</div>
			</section>
		</div>
	</main>
</template>

<script>
import ServiceItem from "../components/ServiceItem.vue";

export default {
	components: {
		ServiceItem,
	},
	data() {
		return {
			serviceItems: [
				{
					imageSrc: "/images/office.jpg",
					imageAlt: "",
					title: "Vue Developer Seeking Employment",
					description:
						"I offer front-end development services, specializing in Vue.js, to help businesses create modern and interactive web applications.",
				},
				{
					imageSrc: "/images/officeThree.jpg",
					imageAlt: "",
					title: "Vue Developer Specializing in UI/UX",
					description:
						"Crafting responsive websites with creativity and precision. Enhancing UX/UI for seamless user interactions. Code-driven innovation awaits!",
				},
				{
					imageSrc: "/images/officeTwo.jpg",
					imageAlt: "",
					title: "Video Editing Services Available",
					description:
						"I offer video editing services, ensuring high-quality results tailored to your specific needs.",
				},
			],
		};
	},
};
</script>
