<template>
	<main id="contact" data-aos="fade-in" data-aos-duration="1500">
		<div class="container">
			<div class="contact">
				<h2 class="contact-title text-center">Contact</h2>
				<ContactInfo />
				<div
					class="contacts flex flex-col md:flex-row items-center md:items-start justify-center md:justify-evenly"
				>
					<FormComponent />
					<ContactContext />
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import ContactInfo from "../components/ContactInfo.vue";
import FormComponent from "../components/FormComponent.vue";
import ContactContext from "../components/ContactContext.vue";
export default {
	components: {
		ContactInfo,
		FormComponent,
		ContactContext,
	},
};
</script>
