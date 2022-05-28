<template>
  <div id="landing-page">
    <Navbar />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "../components/webjtk/Navbar.vue";
import Footer from "../components/webjtk/Footer.vue";
import VirtualTourLP from "../components/webjtk/landing-page/BannerImage.vue";

export default Vue.extend({
  components: {
    Navbar,
    Footer,
  },
  name: "LandingPage",
});
</script>
