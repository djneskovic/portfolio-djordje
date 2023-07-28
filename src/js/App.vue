<template>
	<header-navigation></header-navigation>
	<hero-page></hero-page>
	<about-page></about-page>
	<services-page></services-page>
</template>

<script>
import HeaderNavigation from "./components/HeaderNavigation.vue";
import HeroPage from "./pages/HeroPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ServicesPage from "./pages/ServicesPage.vue";
export default {
	components: {
		HeaderNavigation,
		HeroPage,
		AboutPage,
		ServicesPage,
	},
};
</script>
