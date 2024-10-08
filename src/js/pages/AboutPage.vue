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
							Vue Developer
							<span>Seeking</span> Job Opportunities
						</h3>

						<p class="about-text">
							As a Vue.js developer, I bring experience,
							teamwork, motivation, and a thirst for
							learning. Eager to contribute my skills and
							grow, I thrive in collaborative environments,
							seeking innovative solutions to challenges.
							I'm dedicated to staying up-to-date with web
							development trends and excited to join a
							company that values professional growth.
							Let's create amazing web experiences
							together!
						</p>
						<div class="flex gap-4">
							<button-primary href="#contact"
								>Contact Me</button-primary
							>
							<button-primary
								class="hire"
								href="https://drive.google.com/file/d/15XphgH8pL-SLQV7sKCmUETqNxiu2WWWn/view?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
								download="Djordje-Neskovic-CV.pdf"
								>Download CV</button-primary
							>
						</div>
					</div>

					<div class="about-image">
						<img
							src="../../../public/images/guy.png"
							alt=""
						/>
					</div>
				</div>
			</section>

			<!-- Services -->
			<section>
				<ServicesProviding />
			</section>

			<!-- Work Experience -->
			<section>
				<WorkExperience />
			</section>
		</div>
	</main>
</template>

<script>
import ButtonPrimary from "../components/ButtonPrimary.vue";
import ServicesProviding from "../components/ServicesProviding.vue";
import WorkExperience from "../components/WorkExperience.vue";
export default {
	components: {
		ButtonPrimary,
		ServicesProviding,
		WorkExperience,
	},
};
</script>
