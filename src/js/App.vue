<template>
	<header-navigation></header-navigation>
	<hero-page></hero-page>
	<about-page></about-page>
	<projects-page></projects-page>
	<contact-page></contact-page>
</template>

<script>
import HeaderNavigation from "./components/HeaderNavigation.vue";
import HeroPage from "./pages/HeroPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import ContactPage from "./pages/ContactPage.vue";

export default {
	components: {
		HeaderNavigation,
		HeroPage,
		AboutPage,
		ProjectsPage,
		ContactPage,
	},
};
</script>
