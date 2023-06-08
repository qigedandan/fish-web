import { createRouter, createWebHashHistory } from "vue-router";

import qq from "../components/qq.vue";
import login from "../components/login.vue";
import vpn from "../components/vpn.vue";

const routes = [
  { path: "/", redirect: "/vpn" },
  { path: "/login", component: login, meta: { title: "统一身份验证" } },
  { path: "/vpn", component: vpn, meta: { title: "江苏大学WebVPN" } },
  { path: "/qq", component: qq, meta: { title: "QQ账号安全登录" } },
];

const router = new createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title
    }
  })
export default router;
