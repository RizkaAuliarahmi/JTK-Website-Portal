<template>
  <div>
    <Navbar />
    <BannerImage :title="title" :image="image" color="text-white"/>
    <StackedColumnChart />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./../components/webjtk/Navbar.vue";
import BannerImage from "./../components/webjtk/BannerImage.vue";
import TracerStudyBannerImage from "./../../public/img/webjtk/banner_mapres.png";
import StackedColumnChart from './../components/webjtk/Chart/StackedColumnChart.vue';
import Footer from "./../components/webjtk/Footer.vue";

export default {
  name: "TracerStudy",
  components: {
    Navbar,
    BannerImage,
    StackedColumnChart,
    Footer,
  },
  // eslint-disable-next-line
  data: function () {
    return {
      title: "Tracer Study",
      image: TracerStudyBannerImage,
    };
  },
};
</script>