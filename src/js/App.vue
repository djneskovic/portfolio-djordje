<template>
	<header-navigation></header-navigation>

	<main>
		<section ref="hero" class="fade-section">
			<hero-page></hero-page>
		</section>
		<section ref="about" class="fade-section">
			<about-page></about-page>
		</section>
		<section ref="projects" class="fade-section">
			<projects-page></projects-page>
		</section>
		<section ref="contact" class="fade-section">
			<contact-page></contact-page>
		</section>
	</main>

	<footer-component></footer-component>
</template>

<script>
import HeaderNavigation from "./components/HeaderNavigation.vue";
import HeroPage from "./pages/HeroPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
	components: {
		HeaderNavigation,
		HeroPage,
		AboutPage,
		ProjectsPage,
		ContactPage,
		FooterComponent,
	},

	mounted() {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.style.opacity = "1";
						entry.target.style.transform =
							"translateX(0) translateY(0)";
					} else {
						entry.target.style.opacity = "0";
						entry.target.style.transform =
							"translateX(-50px) translateY(-20px)";
					}
				});
			},
			{
				rootMargin: "-130px",
			}
		);

		const fadeSections = document.querySelectorAll(".fade-section");
		fadeSections.forEach((section) => {
			observer.observe(section);
		});
	},
};
</script>
