import { createRouter, createWebHistory } from "vue-router";

import homePageVue from "./components/homePage.vue";
import quranScriptVue from "./components/quranScript.vue";
import searchResultPageVue from "./components/searchResultPage.vue";
import settingPageVue from "./components/settingPage.vue";
import notFoundVue from "./components/notFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/Home" },
    { path: "/Home", component: homePageVue },
    { path: "/Quran/:id", component: quranScriptVue },
    { path: "/setting", component: settingPageVue },
    { path: "/searchResult", component: searchResultPageVue },
    { path: "/:notFound(.*)", component: notFoundVue },
  ],
});

export default router;
