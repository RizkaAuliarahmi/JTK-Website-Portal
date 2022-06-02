<template>
    <div>
        <Navbar/>
        <BannerImage image="img/webjtk/bannerr.jpg"/>
        <News/>
        <RecentEvent />
        <Galeri/>
        <Footer/>
    </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/webjtk/Navbar.vue";
import BannerImage from "../components/webjtk/landing-page/BannerImage.vue";
import News from "../components/webjtk/landing-page/NewsLandingPage.vue"
import RecentEvent from "./../components/webjtk/Event/RecentEvent.vue";
import Galeri from "../components/webjtk/landing-page/GaleriLandingPage.vue";
import Footer from "../components/webjtk/Footer.vue";

export default Vue.extend({
  components: {
    Navbar,
    BannerImage,
    News,
    RecentEvent,
    Galeri,
    Footer,
  },
  name: "LandingPage",
});
</script>

