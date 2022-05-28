<template>
  <!-- Info & Address -->
  <div class="info-harga flex flex-w justify-between">
    <div class="flex flex-col flex-wrap justify-between ml2 mt1 w-full">
      <div class="m1">
        <p class="text-black font-bold text-4xl my-1">{{ data.name }}</p>
        <div class="flex mb-1">
          <p
            class="text-sm color-cyan text-center w-1/12 my-1 mr2"
            style="
              border: 1px solid #00b4a7;
              box-sizing: border-box;
              border-radius: 30px;
            "
          >
            {{ data.category }}
          </p>
          <!-- Star -->
          <StarCard v-if="isStar === true" :stars="data.star" />
        </div>
        <!-- Price -->
        <div v-if="isRangedPrice === true" class="flex mb-1">
          <img src="/img/icons/geowisata/money.png" class="mr-2 h-5 w-5" />
          <p class="text-base color-navyblue mb-0">
            Rp {{ data.price_min }} - Rp {{ data.price_max }}/people
          </p>
        </div>
        <div v-else-if="isRangedPrice === false" class="flex mb-1">
          <img src="/img/icons/geowisata/money.png" class="mr-2 h-5 w-5" />
          <p class="text-base color-navyblue mb-0">
            Rp {{ data.price }}/people
          </p>
        </div>
        <!-- Time -->
        <div v-if="isTime === true" class="flex mb-1">
          <ion-icon class="color-cyan pt-1 mr-2" name="time-sharp"></ion-icon>
          <p class="text-base color-navyblue mb-0">
            {{ data.open }} WIB - {{ data.close }} WIB
          </p>
        </div>
        <!-- Contact -->
        <div class="flex mb-1">
          <ion-icon class="color-cyan pt-1 mr-2" name="call-sharp"></ion-icon>
          <p class="text-base color-navyblue mb-0">{{ data.contact_number }}</p>
        </div>
        <!-- Location -->
        <div class="resto-location mb-1">
          <ion-icon class="color-cyan mr-2" name="location-sharp"></ion-icon>
          <span class="text-sm color-cyan"> {{ data.address }} </span>
        </div>
        <a
          class="cyan-btn block w-52 rounded text-white text-base text-center py-2 mt2"
          >Order Now
        </a>
      </div>
    </div>
    <img :src="data.img" style="border-radius: 15px 0 0 15px" />
  </div>
</template>

<style scoped>
.cyan-btn:hover {
  background-color: #09887f;
}

.cyan-btn {
  background-color: #00b4a7;
}

.info-harga {
  height: 280px;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  border-radius: 15px;
}
</style>

<script lang="ts">
import Vue from "vue";
import StarCard from "../partnership/StarCard.vue";

export default Vue.extend({
  components: { StarCard },
  name: "InfoCard",
  props: ["data", "isRangedPrice", "isStar", "isTime"],
});
</script>
