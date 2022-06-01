<template>
  <div>
    <Navbar />
    <BannerImage image="img/webjtk/bannerr.jpg" />
    <RecentEvent />
    <Galeri />
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/webjtk/Navbar.vue";
import BannerImage from "../components/webjtk/BannerImage.vue";
import RecentEvent from "./../components/webjtk/Event/RecentEvent.vue";
import Galeri from "../components/webjtk/GaleriLandingPage.vue";
import Footer from "../components/webjtk/Footer.vue";

export default Vue.extend({
  components: {
    Navbar,
    BannerImage,
    RecentEvent,
    Galeri,
    Footer,
  },
  name: "LandingPage",
});
</script>

