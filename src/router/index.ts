import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Event from "../views/Event.vue"
import NewsPortal from "../views/NewsPortal.vue";
import NewsDetail from "../views/NewsDetail.vue";
// import LandingPage from "../temp/LandingPage.vue";
import SaranaPrasarana from "../views/SaranaPrasarana.vue"
import StrukturOrganisasi from "../views/StrukturOrganisasi.vue";
import EmployeeProfile from "../views/EmployeeProfile.vue";
import AchievementList from "../views/AchievementList.vue";
import Partnership from "../views/Partnership.vue";
import MajorProfile from "../views/MajorProfile.vue";
import D4Page from "../views/D4Page.vue";
import D3Page from "../views/D3Page.vue";


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Website JTK",
    component: LandingPage,
  },
  {
    path: "/event/:id",
    name: "<Event Title> | Acara | Jurusan Teknik Komputer dan Informatika POLBAN",
    component: Event,
  },
  {
    path: "/news",
    name: "Berita",
    component: NewsPortal,
  },
  {
    path: "/news-detail",
    name: "NewsDetail",
    component: NewsDetail,
  },
  {
    path: "/struktur-organisasi",
    name: "StrukturOrganisasi",
    component: StrukturOrganisasi
  },
  {
    path: "/profil-pegawai/:id",
    name: "ProfilPegawai",
    component: EmployeeProfile,
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
  {
    path: "/major-profile",
    name: "Profil | Jurusan Teknik Komputer dan Informatika POLBAN",
    component: MajorProfile,
  },
  {
    path: "/d4-profile",
    name: "D4 Teknik Informatika | Jurusan Teknik Komputer dan Informatika POLBAN",
    component: D4Page,
  },
  {
    path: "/d3-profile",
    name: "D3 Teknik Informatika | Jurusan Teknik Komputer dan Informatika POLBAN",
    component: D3Page,
  },
  {
    path: "/sarana-prasarana",
    name: "SaranaPrasarana",
    component: SaranaPrasarana
  }
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
