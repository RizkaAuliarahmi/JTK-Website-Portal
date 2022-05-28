<template>
  <div class=" grid grid-cols-2 w-screen h-screen"
    :style="{
      'background': 'url(/img/webjtk/JTK-LP.jpg)',
      'background-size': '100% 100%',
      'background-position': 'center 0px',
      'background-position-y': '140px',
      'background-repeat': 'no-repeat',
    }"
  >
    <div class="col-span-2 ml-20 mb-8 self-end">
      <span class="font-bold text-white text-3xl font-montserrat">
        {{title}}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BannerImage",
  props:["title", "image"]

});
</script>