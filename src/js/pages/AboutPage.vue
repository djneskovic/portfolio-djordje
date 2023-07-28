<template>
	<main id="about">
		<div class="container">
			<section class="about-me">
				<h2 class="about-title text-center">About Me</h2>

				<div
					class="about-section flex flex-col md:flex-row items-center justify-center md:justify-evenly xl:justify-between"
				>
					<div class="about-context">
						<h3>
							Junior Vue Developer
							<span>Seeking</span> Job Opportunities
						</h3>

						<p class="about-text">
							I am a junior Vue Developer actively seeking
							employment opportunities. With a strong
							background in Vue development, I possess the
							technical expertise and experience necessary
							to contribute to any development team. My
							proficiency in Vue.js allows me to create
							efficient and scalable web applications. I am
							highly motivated, detail-oriented, and
							committed to delivering high-quality code.
						</p>
						<button-primary>Contact Me</button-primary>
					</div>

					<div class="about-image">
						<img
							src="../../../public/images/guy.png"
							alt=""
						/>
					</div>
				</div>
			</section>
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
