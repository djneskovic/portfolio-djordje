<template>
	<main id="hero">
		<div class="container">
			<div
				class="hero-main mt-8 flex flex-col md:flex-row items-center justify-center md:justify-between text-center"
			>
				<div class="hero-context">
					<h1 class="hero-context_title">
						I'm Djordje Neskovic
					</h1>
					<p class="hero-context_text">
						I am a professional Vue Developer seeking
						employment opportunities.
					</p>
					<button-primary class="hero-context_btn"
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
