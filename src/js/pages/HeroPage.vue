<template>
	<main id="hero">
		<div class="container">
			<div
				class="hero-main mt-8 flex flex-col md:flex-row items-center justify-center md:justify-between text-center"
			>
				<div
					class="hero-context md:flex md:flex-col md:justify-center md:items-start"
				>
					<h1 class="hero-context_title">I'm Đorđe Nešković</h1>
					<p class="hero-context_text md:text-start">
						I am a professional Vue Developer seeking
						employment opportunities.
					</p>
					<button-primary href="#about" class="hero-context_btn"
						>Learn More</button-primary
					>
				</div>

				<div class="hero-image">
					<img src="../../../public/images/me.png" alt="" />
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import ButtonPrimary from "../components/ButtonPrimary.vue";
export default {
	components: {
		ButtonPrimary,
	},
};
</script>
