import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import Chat from "./views/Chat.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Create from "./views/Create.vue";
import Invites from "./views/Invites.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/chat",
      name: "chat",
      component: Chat
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/create",
      name: "create",
      component: Create
    },
    {
      path: "/invites",
      name: "invites",
      component: Invites
    }
  ]
});
