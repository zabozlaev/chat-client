import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import apolloProvider from "./graphql";

Vue.config.productionTip = false;

import "./styles/main.scss";
import { dateFromNow } from "./filters/idnex";

Vue.filter("dateFromNow", dateFromNow);

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
