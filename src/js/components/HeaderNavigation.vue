<template>
	<nav id="nav">
		<div class="container">
			<div class="nav-bar flex items-center justify-between relative">
				<div class="nav-logo">
					<img
						src="../../../public/images/logo-black.png"
						alt=""
					/>
				</div>

				<div class="nav-list">
					<ul
						class="list-items"
						:class="{ 'active-menu': isActive }"
					>
						<li class="list-item">
							<a href="#hero" @click="close()">Home</a>
						</li>
						<li class="list-item">
							<a href="#about" @click="close()">About</a>
						</li>
						<li class="list-item">
							<a href="#projects" @click="close()"
								>Projects</a
							>
						</li>
						<li class="list-item">
							<a href="#contact" @click="close()"
								>Contact</a
							>
						</li>
					</ul>
				</div>

				<div class="menu flex items-center justify-center">
					<div class="hamburger lg:hidden">
						<button
							class="hamburger hamburger--elastic"
							:class="{ 'is-active': isActive }"
							type="button"
							@click="toggle"
						>
							<span class="hamburger-box">
								<span class="hamburger-inner"></span>
							</span>
						</button>
					</div>
					<div class="hire-me hidden md:flex md:gap-4">
						<button-primary class="hire" href="#contact"
							>Hire Me</button-primary
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
			</div>
		</div>
	</nav>
</template>

<script>
import ButtonPrimary from "../components/ButtonPrimary.vue";
export default {
	components: {
		ButtonPrimary,
	},

	data() {
		return {
			isActive: false,
		};
	},

	methods: {
		toggle() {
			this.isActive = !this.isActive;
		},
		close() {
			this.isActive = false;
		},
	},
};
</script>
