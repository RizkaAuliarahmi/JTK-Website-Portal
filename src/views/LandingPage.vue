<template>
    <div>
        <Navbar/>
        <BannerImage image="img/webjtk/bannerr.jpg"/>
        <News/>
        <Galeri/>
        <Footer/>
    </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../components/webjtk/Navbar.vue";
import BannerImage from "../components/webjtk/BannerImage.vue";
import News from "../components/webjtk/landing-page/NewsLandingPage.vue"
import Galeri from "../components/webjtk/landing-page/GaleriLandingPage.vue";
import Footer from "../components/webjtk/Footer.vue";

export default Vue.extend({
  components: {
    Navbar,
    BannerImage,
    News,
    Galeri,
    Footer,
  },
  name: "LandingPage",
});
</script>

