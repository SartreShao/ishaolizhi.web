import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

router.afterEach(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

createApp(App)
  .use(router)
  .mount("#app");
