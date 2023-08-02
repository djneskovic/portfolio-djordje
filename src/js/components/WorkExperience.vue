<template>
	<main id="exp">
		<div class="container">
			<div class="exp">
				<h2 class="text-center exp-title">Work Experience</h2>

				<div
					class="exp-items flex flex-col items-center lg:items-start justify-center lg:flex-row lg:gap-12"
				>
					<ExperienceItem
						v-for="item in expItem"
						:key="item.title"
						:title="item.title"
						:desc="item.desc"
					/>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import ExperienceItem from "./ExperienceItem.vue";
export default {
	components: {
		ExperienceItem,
	},

	data() {
		return {
			expItem: [
				{
					title: "Coding",
					desc: "As a newcomer to coding, I have valuable experience in Vue.js. Through personal projects and self-learning, I've developed practical skills in Vue.js development and problem-solving. Eager to contribute and grow as a developer.",
				},

				{
					title: "UI",
					desc: "I specialize in creating user interfaces using the Vue.js framework. With my expertise in UI development, I am capable of designing and implementing visually appealing and user-friendly interfaces that enhance the overall user experience.",
				},

				{
					title: "Video Editing",
					desc: "I have relevant video editing work experience, showcasing my expertise in creating compelling visual content. Proficient in various editing software, I bring creativity and attention to detail to deliver engaging and professional videos.",
				},
			],
		};
	},
};
</script>
