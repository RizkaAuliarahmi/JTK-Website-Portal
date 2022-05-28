<template>
  <!-- Where to go / Geosites -->
  <div class="pb-20 geosite mt-20">
    <div class="flex justify-between items-end mb-5 mx-5">
      <TripLP />
      <button class="m-2 see-all-content-btn color-gray">
        See all geosites
      </button>
    </div>
    <!-- Trips -->
    <div class="mx-5">
      <div class="grid grid-cols-3 gap-10">
        <a
          class="m-auto"
          v-for="(trip, index) in trips"
          :href="trip.link"
          :key="index"
        >
          <div
            v-if="index < 3"
            class="trip text-black text-4xl font-bold font-lato"
          >
            <img class="trip-img mb-2" :src="trip.img" />
            <span class="text-4xl font-bold font-lato">{{ trip.title }}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.geosite {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.trip:hover span {
  text-decoration: underline;
}

.trip-img {
  opacity: 0.96;
  transition: opacity 0.1s ease-in-out;
}

.trip:hover .trip-img {
  opacity: 1;
}
</style>

<script lang="ts">
import Vue from "vue";
import TripLP from "./TripLP.vue";
import tripData from "../../../../public/dummyData/tripDummy.json";

export default Vue.extend({
  components: { TripLP },
  name: "ArticleLP",

  data() {
    return {
      trips: tripData,
    };
  },
});
</script>
