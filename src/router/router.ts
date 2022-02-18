import { App } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { createRouterGuard } from "./routeGuard";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("@/views/dashboard/workbench/Workbench.vue"), // 注意这里要带上 文件后缀.vue
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export function setupRouter(app: App) {
  app.use(router);
  createRouterGuard(router);
}

export default router;
