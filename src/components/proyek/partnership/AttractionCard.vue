<template>
  <div class="grid grid-cols-2 gap-4 ml2 mr2 mb2 font-lato">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="mb1 bg-black"
      style="border-radius: 10px"
    >
      <a
        href="/attraction-detail"
        class="attraction-img text-white flex flex-col flex-wrap justify-center items-center w-full"
        :style="`background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${data[index].img});`"
      >
        <p class="font-black text-2xl">
          {{ data[index].name }}
        </p>
        <p class="text-base mb-0">Operation Time:</p>
        <p class="font-black text-base">
          {{ data[index].start }} -
          {{ data[index].end }}
        </p>
        <p class="mb-0">Ticket Price:</p>
        <p class="font-black text-base">
          {{ data[index].price }}
        </p>
      </a>
    </div>
  </div>
</template>

<style scoped>
.attraction-img:hover {
  opacity: 100%;
}

.attraction-img {
  width: 640px;
  height: 420px;
  border-radius: 10px;
  background-repeat: no-repeat !important;
  background-size: 100% 100% !important;
  opacity: 90%;
  transition: opacity 0.3s ease-in-out;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AttractionCard",
  props: ["data"],

  data() {
    return {
      attractionData: this.data,
    };
  },
});
</script>
