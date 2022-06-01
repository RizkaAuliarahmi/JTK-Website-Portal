import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Event from "../views/Event.vue"
import NewsPortal from "../views/NewsPortal.vue";
// import LandingPage from "../temp/LandingPage.vue";
// import StrukturOrganisasi from "../views/StrukturOrganisasi.vue"
import StrukturOrganisasi from "../views/StrukturOrganisasi.vue";
import EmployeeProfile from "../views/EmployeeProfile.vue";
import AchievementList from "../views/AchievementList.vue";
import Partnership from "../views/Partnership.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Website JTK",
    component: LandingPage,
  },
  {
    path: "/event/1",
    name: "<Event Title> | Acara | Jurusan Teknik Komputer dan Informatika POLBAN",
    component: Event,
  },
  {
    path: "/news",
    name: "Berita",
    component: NewsPortal,
  },
  {
    path: "/struktur-organisasi",
    name: "StrukturOrganisasi",
    component: StrukturOrganisasi
  },
  {
    path: "/profil-pegawai",
    name: "ProfilPegawai",
    component: EmployeeProfile
  },
  {
    path: "/achievement",
    name: "Daftar Prestasi | Jurusan Teknik Komputer dan Informatika POLBAN",
    component: AchievementList,
  },
  {
    path: "/partnership",
    name: "Mitra Kami",
    component: Partnership,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return { selector: to.hash };
      //Or for Vue 3:
      //return {el: to.hash}
    } else {
      return { x: 0, y: 0 };
    }
  },
});

const DEFAULT_TITLE = "Website JTK";
// eslint-disable-next-line
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.name || DEFAULT_TITLE;
  });
});

export default router;
