<template>
	<div class="form-container">
		<div class="form">
			<span class="heading">Get in touch</span>
			<input
				placeholder="Name"
				type="text"
				class="input"
				v-model.trim="name"
			/>
			<input
				placeholder="Email"
				id="mail"
				type="email"
				class="input"
				v-model.trim="email"
			/>
			<textarea
				placeholder="Say Hello"
				rows="10"
				cols="30"
				id="message"
				name="message"
				class="textarea"
				v-model="message"
			></textarea>
			<div class="button-container">
				<div class="send-button" @click="sendEmail()">Send</div>
				<div class="reset-button-container">
					<div
						id="reset-btn"
						class="reset-button"
						@click="clearForm()"
					>
						Reset
					</div>
				</div>
			</div>
			<p class="text-green text-base mt-8" v-if="validForm">
				Message Sent Successfully.
			</p>
			<p class="text-gold text-base mt-8" v-if="invalidForm">
				Something went wrong. <br />
				Please check your inputs.
			</p>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			name: "",
			email: "",
			message: "",
			validForm: false,
			invalidForm: false,
		};
	},

	methods: {
		sendEmail() {
			if (!this.name || !this.email.includes("@") || !this.message) {
				this.invalidForm = true;
			} else {
				const newRequest = {
					Name: this.name,
					Email: this.email,
					Message: this.message,
				};

				axios.post("https://formspree.io/f/xleygbej", newRequest)
					.then((res) => {
						console.log(res.data);
					})
					.catch((err) => {
						console.log(err);
					});

				this.name = "";
				this.email = "";
				this.message = "";
				this.validForm = true;
			}

			setTimeout(() => {
				this.validForm = false;
				this.invalidForm = false;
			}, 3000);
		},

		clearForm() {
			this.name = "";
			this.email = "";
			this.message = "";
			this.validForm = false;
			this.invalidForm = false;
		},
	},
};
</script>
