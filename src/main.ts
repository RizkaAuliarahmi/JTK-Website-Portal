import Vue from "vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@/assets/tailwind.css";
import CountryFlag from "vue-country-flag";
import App from "./App.vue";

Vue.component("country-flag", CountryFlag);

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
