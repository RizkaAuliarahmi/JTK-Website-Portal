<template>
  <div>
    <Navbar />
    <BannerImage :title="title" :image="image" color="text-white" />
    <v-row class="my-8">
        <DoughnutChart />
    </v-row>
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "./../components/webjtk/Navbar.vue";
import DoughnutChart from "../components/webjtk/Chart/AchievementDoughnutChart.vue";
import BannerImage from "../components/webjtk/BannerImage.vue";
import EventBannerImage from "./../../public/img/events/chef.png";
import Footer from "./../components/webjtk/Footer.vue";

export default Vue.extend({
  name: "AchievementList",
  components: {
    Navbar,
    BannerImage,
    DoughnutChart,
    // AchievementTable,
    Footer,
  },
  data: function () {
    return {
      title: "Daftar Prestasi",
      image: EventBannerImage,
    };
  },
});
</script>

<style scoped>
</style>