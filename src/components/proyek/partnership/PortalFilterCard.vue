<template>
  <div class="font-lato mt5">
    <!-- Filter Result -->
    <div class="filter-border px-3 py-2">
      <div class="flex justify-between">
        <span class="color-navyblue text-xl font-semibold"
          >Filter Result :</span
        >
        <button
          @click="resetFilter"
          class="color-cyan font-bold hover:underline text-sm"
        >
          Reset Filter
        </button>
      </div>
      <p class="mt2 text-sm mb-0">Showing results based on categories</p>
    </div>
    <!-- Price Slider -->
    <div class="filter-border px-3 py-2">
      <p class="color-navyblue font-semibold text-xl">
        Average cost of meals per person
      </p>
      <div class="flex items-center justify-center">
        <div class="price-range-input w-1/2">
          <div class="flex items-center px-3 py-1">
            <p class="mb-0">Rp</p>
            <input
              id="inputPrice1"
              type="text"
              class="ml-2 w-2/3"
              :value="sliderVal1"
              disabled
            />
          </div>
        </div>
        <div class="filter-border w-1/12"></div>
        <div class="price-range-input w-1/2">
          <div class="flex items-center px-3 py-1">
            <p class="mb-0">Rp</p>
            <input
              id="inputPrice2"
              type="text"
              class="ml-2 w-2/3"
              :value="sliderVal2"
              disabled
            />
          </div>
        </div>
      </div>
      <div class="flex">
        <input
          id="slider1"
          class="slider-rtl"
          type="range"
          :min="0"
          :max="1000000"
          :value="sliderValTemp"
          :oninput="getSliderValue()"
        />
        <input
          id="slider2"
          type="range"
          :min="1000000"
          :max="2000000"
          :value="sliderVal2"
          :oninput="getSliderValue()"
        />
      </div>
    </div>
    <!-- Stars -->
    <div v-if="isStar === true" class="filter-border px-3 py-2">
      <p class="mb2 color-navyblue font-semibold text-xl">
        {{ portal_name }} Preference Grade
      </p>
      <div class="flex flex-column-reverse">
        <div class="flex">
          <input type="checkbox" class="mr2" />
          <p class="mb-0 text-base color-gray">Without Grade</p>
        </div>
        <div v-for="index in 5" :key="index" class="flex">
          <input type="checkbox" :value="index" class="mr2" />
          <StarCard :stars="index" />
        </div>
      </div>
    </div>
    <!-- Facilities -->
    <div class="filter-border px-3 py-2">
      <p class="mb2 color-navyblue font-semibold text-xl">Facilities</p>
      <div v-for="(fac, index) in data.general_facility_list" :key="index">
        <input
          type="checkbox"
          :value="data.general_facility_list[index]"
          v-model="data.general_facility_list[index].selectedFacilities"
        />
        <label class="text-base color-darkgray">
          {{ data.general_facility_list[index] }}
        </label>
      </div>
    </div>
    <!-- Type/Category -->
    <div class="filter-border px-3 py-2">
      <p class="mb2 color-navyblue font-semibold text-xl">
        Type of {{ portal_name }} Preference
      </p>
      <!-- No Radio Button Filter (Restaurant) -->
      <div v-if="isRadioBtn === false">
        <div v-for="(type, index) in data.type_list" :key="index">
          <input
            type="checkbox"
            :value="data.type_list[index]"
            v-model="data.type_list[index].selectedType"
          />
          <label class="text-base color-darkgray">
            {{ data.type_list[index] }}
          </label>
        </div>
      </div>
      <!-- With Radio Button Filter (Accomodation) -->
      <div v-else>
        <div v-for="(type, index) in data.accomodationPreference" :key="index">
          <input
            type="radio"
            :value="data.accomodationPreference[index]"
            name="preference"
          />
          <label class="text-base color-darkgray">
            {{ data.accomodationPreference[index] }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider-rtl {
  direction: rtl;
}

input[type="range"] {
  width: 50%;
}

.price-range-input {
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  border-radius: 25px;
}

.filter-border {
  border: 1px solid #eeeeee;
  box-sizing: border-box;
}
</style>

<script lang="ts">
import Vue from "vue";
import StarCard from "../partnership/StarCard.vue";

export default Vue.extend({
  components: { StarCard },
  name: "PortalFilterCard",
  props: ["data", "portal_name", "isStar", "isRadioBtn"],

  data() {
    return {
      preference: null,
      selectedFacilities: [],
      selectedType: [],
      sliderValue: [0],
      sliderValTemp: 1000000,
      sliderVal1: 0,
      sliderVal2: 2000000,
    };
  },

  async created() {
    await this.data;
    if (document.getElementById("slider1")) {
      let val1 = document.getElementById("slider1") as HTMLInputElement;
      val1.addEventListener("input", this.getSliderValue);
    }
    if (document.getElementById("slider2")) {
      let val2 = document.getElementById("slider2") as HTMLInputElement;
      val2.addEventListener("input", this.getSliderValue);
    }
  },

  methods: {
    resetFilter() {
      this.preference = null;
      this.selectedFacilities = [];
      this.selectedType = [];
    },
    getSliderValue() {
      if (document.getElementById("slider1")) {
        let val1 = document.getElementById("slider1") as HTMLInputElement;
        this.sliderValTemp = Number(val1.value);
        this.sliderVal1 = 1000000 - Number(val1.value);
      }
      if (document.getElementById("slider2")) {
        let val2 = document.getElementById("slider2") as HTMLInputElement;
        this.sliderVal2 = Number(val2.value);
      }
    },
    passSliderValue() {
      this.sliderValue = [this.sliderVal1, this.sliderVal2];
      this.$emit("passedSliderValue", this.sliderValue);
    },
  },
});
</script>
