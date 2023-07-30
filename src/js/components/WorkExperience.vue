<template>
	<main id="exp">
		<div class="container">
			<div class="exp">
				<h2 class="text-center exp-title">Work Experience</h2>

				<div
					class="exp-items flex flex-col items-center lg:items-start justify-center lg:flex-row gap-8 lg:gap-12"
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
					desc: "I possess a strong proficiency in coding, enabling me to efficiently create and maintain complex web applications using Vue.js framework. With a meticulous attention to detail and a deep understanding of coding principles, I am capable of crafting robust and scalable solutions to meet the unique requirements of any project.",
				},

				{
					title: "UI",
					desc: "I specialize in creating user interfaces using the Vue.js framework. With my expertise in UI development, I am capable of designing and implementing visually appealing and user-friendly interfaces that enhance the overall user experience.",
				},

				{
					title: "UX",
					desc: "I possess a strong skill set in UX (User Experience) design. With a meticulous attention to detail and a deep understanding of user behavior, I am able to create intuitive and visually appealing interfaces that enhance user satisfaction and engagement.",
				},
			],
		};
	},
};
</script>
