import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
axios.defaults.baseURL = "https://api.shop.eduwork.cn";
axios.interceptors.request.use((config) => {
  config.headers.Authorization = window.sessionStorage.getItem("access_token");
  return config;
});

Vue.prototype.$axios = axios;

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
