<template>
  <div class="font-lato search-container bg-navyblue rounded py-5">
    <div class="text-white font-semibold text-2xl ml5">Search</div>
    <div class="text-white text-xl mt-5 ml-5">{{ formTitle }}:</div>
    <div class="flex flex-wrap mt3 w-full">
      <div class="email-input-box flex w-full items-center ml5 mr5">
        <input
          id="search-card"
          class="w-full font-lato font-normal text-l ml-5 mr-5 outline-none color-navyblue"
          type="text"
          placeholder="Ciletuh Pelabuhanratu Geopark"
        />
      </div>
      <div class="flex justify-center items-center mt5 w-full">
        <button
          @click="getSearchValue"
          class="email-subscribe-btn w-11/12 text-white font-lato font-normal text-base mt4"
        >
          Search..
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (width) {
}

.search-container {
  height: 260px;
  background: #142e46;
}
.email-subscribe-btn {
  /* width: 280px; */
  height: 40px;
  background: #00b4a7;
  border: 0.3px solid #142e46;
  box-sizing: border-box;
  border-radius: 5px;
  transition: background 0.1s ease-in-out;
}

.email-subscribe-btn:hover {
  background: #09887f;
}

.email-input-box {
  width: 274px;
  height: 48px;
  background: #f7f7f7;
  border: 1px solid #142e46;
  box-sizing: border-box;
  border-radius: 5px;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SearchCard",
  props: ["formTitle"],

  data() {
    return {
      searchValue: "",
    };
  },

  methods: {
    getSearchValue() {
      let cardValue = document.getElementById(
        "search-card"
      ) as HTMLInputElement;
      this.searchValue = cardValue.value;

      this.passSearchValue();
    },

    passSearchValue() {
      this.$emit("passedSearchValue", this.searchValue);
    },
  },
});
</script>
