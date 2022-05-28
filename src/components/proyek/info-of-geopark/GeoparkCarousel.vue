<template>
  <div class="relative font-lato mt3 ml3 mb5 mr3">
    <div class="flex justify-between mb-3">
      <div>
        <p class="font-semibold color-darkgray font-openSans font-lg">
          {{ category }}
        </p>
        <span class="text-5xl font-semibold font-sora w-4/5">{{ title }}</span>
      </div>
      <div class="flex items-center">
        <div v-if="isAllBtn === true" class="mr-5">
          <a href="#">
            <button class="events-btn color-cyan font-sora px-5">
              See all {{ title }}
            </button>
          </a>
        </div>
        <div class="flex items-end">
          <button :id="'left-arrow-' + title" @click="toLeft">
            <ion-icon
              class="mr-3"
              name="arrow-back-circle-outline"
              style="width: 47px; height: 47px"
            ></ion-icon>
          </button>
          <button :id="'right-arrow-' + title" @click="toRight">
            <ion-icon
              name="arrow-forward-circle-outline"
              style="width: 47px; height: 47px"
            ></ion-icon>
          </button>
        </div>
      </div>
    </div>
    <div class="overflow-hidden">
      <div
        :id="'carousel-container-' + title"
        class="flex justify-between w-full"
      >
        <div
          v-for="(item, index) in data"
          :key="index"
          id="img-container"
          class="cursor-pointer"
          :class="{ ml1: index !== 0 }"
        >
          <a v-if="index < 10" href="#" class="text-black hover:underline">
            <img
              :src="item.img"
              class="mb2 pr-6 w-full"
              style="max-height: 420px; max-width= 375px;"
            />
            <span v-if="isAllBtn" class="text-3xl font-bold">{{
              item.title
            }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#img-container {
  flex: 0 0 33%;
}

.events-btn:hover {
  background: #0aafa4;
  color: white !important;
}

.events-btn {
  height: 45px;
  border: 1px solid #00b4a7;
  box-sizing: border-box;
  border-radius: 20px;
  background: #fff;
  transition: background 0.2s ease-in-out;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "GeoparkCarousel",
  props: ["data", "category", "title", "isAllBtn"],

  data() {
    return {
      clickCount: 0,
    };
  },

  async created() {
    await this.data;
    this.disableNavigation();
  },

  methods: {
    toRight() {
      let carouselContainer = document.getElementById(
        `carousel-container-${this.title}`
      ) as HTMLElement;
      this.clickCount++;
      carouselContainer.style.transform = `translateX(${
        this.clickCount * -33
      }%)`;
      carouselContainer.style.transition = `transform 0.4s ease-in-out`;
      this.disableNavigation();
    },
    toLeft() {
      let carouselContainer = document.getElementById(
        `carousel-container-${this.title}`
      ) as HTMLElement;
      this.clickCount--;
      carouselContainer.style.transform = `translateX(${
        this.clickCount * -33
      }%)`;
      carouselContainer.style.transition = `transform 0.4s ease-in-out`;
      this.disableNavigation();
    },
    disableNavigation() {
      let rightArrow = document.getElementById(
        `right-arrow-${this.title}`
      ) as HTMLInputElement;
      let leftArrow = document.getElementById(
        `left-arrow-${this.title}`
      ) as HTMLInputElement;
      if (this.clickCount === 0) {
        leftArrow.disabled = true;
        leftArrow.style.opacity = "50%";
      } else if (this.data.length - 3 === this.clickCount) {
        rightArrow.disabled = true;
        rightArrow.style.opacity = "50%";
      } else {
        leftArrow.disabled = false;
        rightArrow.disabled = false;
        leftArrow.style.opacity = "100%";
        rightArrow.style.opacity = "100%";
      }
    },
  },
});
</script>
