import { createApp } from "vue";
import App from "./App.vue";
import { VueFire, VueFireAuth } from "vuefire";
import { firebaseApp } from "./firebase";
import router from "./router/router.js";

const app = createApp(App);

app
  .use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()],
  })
  .use(router)
  .mount("#app");
