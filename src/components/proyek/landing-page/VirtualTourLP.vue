<template>
  <!-- Virtual Tour Banner -->
  <div
    class="vt-banner grid content-center w-screen h-screen font-lato text-white"
  >
    <p class="text-8xl font-normal vt-banner-text">Virtual Tour</p>
    <p class="text-xl font-normal vt-banner-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
      sit amet luctus venenatis, lectus magna fringilla, amet, consectetur
      adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna
      fringilla purus amet luctus.
    </p>
    <button class="text-base vt-button ml3">Try it now</button>
  </div>
</template>

<style scoped>
.vt-button:hover {
  background: #09887f;
}

.vt-button {
  width: 106px;
  height: 44px;
  background: #00b4a7;
  border-radius: 4px;
}

.vt-banner-text {
  max-width: 45%;
  margin-left: 3%;
}

.vt-banner {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
    url(/img/virtualtour/laut-banner.png), #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-height: 1080px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  min-height: 750px !important;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "EventLP",
});
</script>
