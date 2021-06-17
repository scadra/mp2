import Vue from "vue";

import VueRouter, { Route } from "vue-router";
import Home from "Pages/Index.vue";
import ResetPasswordForm from "Pages/new-password/new-password.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/component/apiportal/reset",
    name: "reset-link",
    props: (route: Route) => ({
      email: route.query.email,
      validator: route.query.validator,
    }),
    component: ResetPasswordForm,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
