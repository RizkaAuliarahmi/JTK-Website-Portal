<template>
  <div class=" grid grid-cols-2 w-screen h-96"
    :style="{
      background: 'url(' + image + ')',
      'background-size': '100% 100%',
      'background-position-y': '144px',
    }"
  >
    <div class="col-span-2 ml-20 mb-8 self-end">
      <span class="font-bold text-3xl font-montserrat" :class="color">
        {{title}}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BannerImage",
  props:["title", "image","color"]

});
</script>