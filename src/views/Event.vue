<template>
  <div>
    <Navbar />
    <BannerImage :image="image" />
    <div class="ma-16">
      <v-row>
        <h1 class="headline">
          <strong>
            SEMINAR INDUSTRI : PROGRAM MAGISTER TERAPAN REKAYASA INFRASTRUKTUR
          </strong>
        </h1>
        <v-spacer></v-spacer>
        <v-btn color="orange">Register</v-btn>
      </v-row>
      <div class="event-info py-4 my-6">
        <div>
          <h2><strong> Tempat </strong></h2>
          <p>Zoom Meeting</p>
        </div>
        <div>
          <h2><strong> Waktu </strong></h2>
          <p>14 April 2022 09.00 - 11.00 WIB</p>
        </div>
        <div>
          <h2><strong> Pemateri </strong></h2>
          <li>Panji Marshando</li>
          <li>Lintang Dian Artanti</li>
          <li>Azhar Lazuardiansyah</li>
          <li>M. Taufik Habibilah Ibnu</li>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-10">
        <img src="../../public/img/events/layangan.png" />
        <div class="event-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
          tristique senectus et netus et malesuada fames ac. Suspendisse
          interdum consectetur libero id faucibus nisl tincidunt. Tincidunt nunc
          pulvinar sapien et ligula ullamcorper malesuada proin. Placerat
          vestibulum lectus mauris ultrices. Orci eu lobortis elementum nibh
          tellus molestie nunc. Ut ornare lectus sit amet est. Commodo quis
          imperdiet massa tincidunt nunc. Orci sagittis eu volutpat odio
          facilisis. Donec massa sapien faucibus et molestie ac feugiat.
          Tincidunt vitae semper quis lectus nulla. Tellus pellentesque eu
          tincidunt tortor aliquam. Non diam phasellus vestibulum lorem sed
          risus ultricies. Quis blandit turpis cursus in hac habitasse. Suscipit
          tellus mauris a diam maecenas sed enim ut.
        </div>
      </div>
    </div>
    <!-- <EventCarousel /> -->
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import BannerImage from "../components/webjtk/BannerImage.vue";
import Navbar from "./../components/webjtk/Navbar.vue";
import Footer from "./../components/webjtk/Footer.vue";
import EventBannerImage from "./../../public/img/events/chef.png";

export default Vue.extend({
  name: "Event",
  components: {
    Navbar,
    BannerImage,
    // EventCarousel,
    Footer,
  },
  data: function () {
    return {
      title: "<Event Title>",
      image: EventBannerImage,
    };
  },
});
</script>

<style scoped>
.event-info {
  text-align: center;
  background-color: orange;
}
.event-desc {
  text-align: justify;
}
</style>