<template>
  <div class="ml2 mr2 grid grid-cols-2 gap-5 content-center font-lato">
    <div v-for="(item, index) in data" :key="index" class="item-card mb-7">
      <a href="#" class="text-black">
        <img :src="item.images[0].url" class="souvenir-img mb2" />
        <div class="ml2 font-black">
          <p class="text-2xl mb2">
            {{ item.name }}
          </p>
          <div class="flex justify-between color-navyblue mb3">
            <div v-if="isTime === true" class="flex items-center w-1/2">
              <img src="/img/icons/geowisata/time.png" class="mr5 h-5 w-5" />
              <p class="text-base mb-0">
                {{ item.open.slice(0, 5) }} - {{ item.close.slice(0, 5) }} WIB
              </p>
            </div>
            <div class="flex items-center w-1/2">
              <img src="/img/icons/geowisata/money.png" class="mr5 h-5 w-5" />
              <p class="text-base mb-0">
                {{ formatToCurrency(item.range_min) }} -
                {{ formatToCurrency(item.range_max) }}/item
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.item-card {
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.souvenir-img {
  width: 100%;
  height: 295px;
  border-radius: 10px;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PortalsImgTitleCard",
  props: ["data", "isTime"],

  methods: {
    formatToCurrency(inputNumber: number) {
      let price =
        "Rp" + inputNumber.toString().replace(/\d(?=(\d{3})+$)/g, "$&.");
      return price;
    },
  },
});
</script>
