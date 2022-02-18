import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "@/router/router";

async function bootstrap() {
  const app = createApp(App);

  setupRouter(app);

  app.mount("#app");
}

bootstrap();
