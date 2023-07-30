import { createApp } from "vue";
import App from "./js/App.vue";

import Aos from "aos";

const app = createApp(App);

Aos.init();

app.mount("#app");
