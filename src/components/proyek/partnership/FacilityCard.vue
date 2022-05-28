<template>
  <!-- Facility -->
  <div class="mt3">
    <!-- Using Icons -->
    <div v-if="isIcon === true">
      <p class="text-4xl font-bold">Facility</p>
      <div class="mt3">
        <div v-if="showAll === false" class="flex flex-wrap justify-between">
          <div
            v-for="(item, index) in data"
            :key="index"
            class="facility-item grid grid-cols-1 cursor-pointer m1"
          >
            <img
              :src="item.img"
              class="content-center m-auto"
              style="width: 150px; height: 150px"
            />
            <span class="text-2xl font-bold text-center content-center">{{
              item.type
            }}</span>
          </div>
        </div>
        <div v-if="showAll === true" class="grid grid-cols-3 ml3 mr3">
          <div v-for="(item, index) in data" :key="index">
            <div class="flex">
              <img :src="item.img" style="width: 35px; height: 35px" />
              <p class="ml2 text-2xl font-bold">{{ item.type }}</p>
            </div>
            <ul
              class="flex flex-col flex-wrap list-disc ml5 mb5"
              style="max-height: 300px"
            >
              <div
                v-for="(item, index2) in data[index].facilityDetail"
                :key="index2"
                class="flex flex-wrap"
              >
                <li class="text-xl">{{ item }}</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex justify-center w-full mt2">
        <button
          @click="toogleShow"
          v-if="showAll === false"
          class="cyan-btn block w-56 rounded text-white text-base text-center py-2 mt2"
        >
          Show All Facilities
        </button>
        <button
          @click="toogleShow"
          v-if="showAll === true"
          class="cyan-btn block w-56 rounded text-white text-base text-center py-2 mt2"
        >
          Show Less
        </button>
      </div>
    </div>
    <!-- No icons but wrap items -->
    <div v-if="isIcon === false && isWrap === true" class="mt2">
      <p class="text-4xl font-bold">{{ category }}</p>
      <ol
        id="list-container"
        class="flex flex-column flex-wrap list-disc pb-9"
        style="max-height: 140px"
      >
        <div v-for="(item, index) in data" :key="index">
          <li class="text-base">
            {{ item }}
          </li>
        </div>
      </ol>
    </div>
    <!-- No icons and no wrap -->
    <div v-if="isIcon === false && isWrap === false" class="mt2">
      <p class="text-4xl font-bold">{{ category }}</p>
      <ol id="list-container" class="flex flex-column list-disc pb-9">
        <div v-for="(item, index) in data" :key="index">
          <li class="text-base">
            {{ item }}
          </li>
        </div>
      </ol>
    </div>
  </div>
</template>

<style scoped>
.cyan-btn:hover {
  background-color: #09887f;
}

.cyan-btn {
  background-color: #00b4a7;
}

.facility-item:hover {
  background: #e0e0e0;
}

#list-container {
  border-bottom: 1px solid #eeeeee;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FacilityCard",
  props: ["data", "isIcon", "category", "isWrap"],

  data() {
    return {
      showAll: false,
    };
  },

  methods: {
    toogleShow() {
      this.showAll = !this.showAll;
    },
  },
});
</script>
