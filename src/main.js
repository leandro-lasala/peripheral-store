import "./assets/styles/reset.css";
import "./assets/styles/variables.css";
import "./assets/styles/global.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
