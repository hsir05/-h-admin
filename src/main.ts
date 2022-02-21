import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "@/router/router";
import { setupPinia } from "@/store/index";

async function bootstrap() {
  const app = createApp(App);

  setupRouter(app);

  setupPinia(app);

  app.mount("#app");
}

bootstrap();
