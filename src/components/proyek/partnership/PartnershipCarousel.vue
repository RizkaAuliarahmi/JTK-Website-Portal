<template>
  <div class="relative font-lato mt3 ml3 mb5 mr3">
    <div class="flex justify-between mb-3">
      <div class="flex items-center justify-center">
        <p class="text-5xl m-0 font-bold">{{ category }}</p>
      </div>
      <div class="flex items-center">
        <div class="mr-5">
          <a :href="link">
            <button class="events-btn color-cyan font-sora px-5">
              Show all {{ category }}
            </button>
          </a>
        </div>
        <div class="flex items-end">
          <button :id="'left-arrow-' + category" @click="toLeft">
            <ion-icon
              class="mr-3"
              name="arrow-back-circle-outline"
              style="width: 47px; height: 47px"
            ></ion-icon>
          </button>
          <button :id="'right-arrow-' + category" @click="toRight">
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
        :id="'carousel-container-' + category"
        class="flex justify-between w-full"
      >
        <div
          v-for="(item, index) in data"
          :key="index"
          id="img-container"
          class="cursor-pointer"
          :class="{ ml1: index !== 0 }"
        >
          <a
            v-if="index < 10"
            :href="data[0].link_detail"
            class="text-black hover:underline"
          >
            <img :src="item.img" class="mb2 w-full" style="max-height: 300px" />
            <span class="text-3xl font-bold">{{ item.type }}</span>
            <p v-if="isDetail === true" class="text-base mt-2">
              {{ item.detail }}
            </p>
          </a>
          <div
            v-if="index === 10"
            class="mb2 w-full flex justify-center items-center"
            style="
              height: 175px;
              max-height: 300px;
              background: #eeeeee;
              border-radius: 20px;
            "
          >
            <a href="#" class="">
              <button class="events-btn color-cyan font-sora px-5">
                See more
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#img-container {
  flex: 0 0 24%;
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
  name: "PartnershipCarousel",
  props: ["data", "category", "link", "isDetail"],

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
        `carousel-container-${this.category}`
      ) as HTMLElement;
      this.clickCount++;
      carouselContainer.style.transform = `translateX(${
        this.clickCount * -25
      }%)`;
      carouselContainer.style.transition = `transform 0.4s ease-in-out`;
      this.disableNavigation();
    },
    toLeft() {
      let carouselContainer = document.getElementById(
        `carousel-container-${this.category}`
      ) as HTMLElement;
      this.clickCount--;
      carouselContainer.style.transform = `translateX(${
        this.clickCount * -25
      }%)`;
      carouselContainer.style.transition = `transform 0.4s ease-in-out`;
      this.disableNavigation();
    },
    disableNavigation() {
      let rightArrow = document.getElementById(
        `right-arrow-${this.category}`
      ) as HTMLInputElement;
      let leftArrow = document.getElementById(
        `left-arrow-${this.category}`
      ) as HTMLInputElement;
      if (this.clickCount === 0) {
        leftArrow.disabled = true;
        leftArrow.style.opacity = "50%";
      } else if (this.data.length - 5 === this.clickCount) {
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
