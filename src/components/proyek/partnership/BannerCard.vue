<template>
  <div>
    <div class="flex justify-center">
      <div
        class="my-5 pr-banner w-3/5 grid content-center mr-0 bg-cyan"
        style="height: 284px"
      >
        <p
          class="w-4/5 pr-banner-text text-white text-bold font-lato text-6xl content-center text-center"
        >
          {{ category }}
        </p>
      </div>
      <div class="w-2/6 grid content-center ml-0">
        <img :src="categoryImg" style="height: 284px" class="w-full" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-cyan {
  background-color: #00b4a7;
  border-radius: 20px;
}

.pr-searchbar-searchbtn {
  height: 50px;
}

.pr-searchbar {
  height: 112px;
  border-radius: 20px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
}

.pr-banner-text {
  margin-left: 10%;
}

.pr-banner {
  border-radius: 20px 0 0 20px;
  height: 524px;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BannerCard",
  props: ["category", "categoryImg"],
});
</script>
