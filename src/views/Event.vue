<template>
  <div>
    <!-- <Navbar /> -->
    <img
      src="../../public/img/events/layangan.png"
      :style="{
        background: 'url(' + image + ')',
        'background-size': '100% 100%',
      }"
      class="grid grid-cols-2 w-screen h-60"
    />
    <div class="grid grid-cols-2 gap-4">
      <h1>
        SEMINAR INDUSTRI : PROGRAM MAGISTER TERAPAN REKAYASA INFRASTRUKTUR
      </h1>
      <button>Register</button>
    </div>
    <div>
      <div>
        <h2>Tempat</h2>
        <p>Zoom Meeting</p>
      </div>
      <div>
        <h2>Waktu</h2>
        <p>14 April 2022</p>
        <p>09.00 - 11.00 WIB</p>
      </div>
      <div>
        <h2>Pemateri</h2>
        <li>Panji Marshando</li>
        <li>Lintang Dian Artanti</li>
        <li>Azhar Lazuardiansyah</li>
        <li>M. Taufik Habibilah Ibnu</li>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <img src="../../public/img/events/layangan.png" />
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada fames ac. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Placerat vestibulum lectus mauris ultrices. Orci eu lobortis elementum nibh tellus molestie nunc. Ut ornare lectus sit amet est. Commodo quis imperdiet massa tincidunt nunc. Orci sagittis eu volutpat odio facilisis. Donec massa sapien faucibus et molestie ac feugiat. Tincidunt vitae semper quis lectus nulla. Tellus pellentesque eu tincidunt tortor aliquam. Non diam phasellus vestibulum lorem sed risus ultricies. Quis blandit turpis cursus in hac habitasse. Suscipit tellus mauris a diam maecenas sed enim ut.></div>
    </div>
    <!-- <EventCarousel /> -->
    <!-- <Footer /> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Event",
  components: {
    // Navbar,
    // EventCarousel,
    // Footer,
  },
  //   data() {
  //     return {
  //       title: "Understanding Props in vuejs",
  //       image: "../../public/img/events/layangan.png",
  //     };
  //   },
});
</script>

<style scoped>
</style>