<template>
	<header-navigation></header-navigation>
	<hero-page></hero-page>
</template>

<script>
import HeaderNavigation from "./components/HeaderNavigation.vue";
import HeroPage from "./pages/HeroPage.vue";
export default {
	components: {
		HeaderNavigation,
		HeroPage,
	},
};
</script>
