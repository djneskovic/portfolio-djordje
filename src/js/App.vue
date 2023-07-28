<template>
	<header-navigation></header-navigation>
	<hero-page></hero-page>
	<about-page></about-page>
</template>

<script>
import HeaderNavigation from "./components/HeaderNavigation.vue";
import HeroPage from "./pages/HeroPage.vue";
import AboutPage from "./pages/AboutPage.vue";
export default {
	components: {
		HeaderNavigation,
		HeroPage,
		AboutPage,
	},
};
</script>
