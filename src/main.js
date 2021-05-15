import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue/es";
import "ant-design-vue/dist/antd.css";
import VueI18n from "./language";

createApp(App)
  .use(Antd)
  .use(store)
  .use(router)
  .use(VueI18n)
  .mount("#app");
