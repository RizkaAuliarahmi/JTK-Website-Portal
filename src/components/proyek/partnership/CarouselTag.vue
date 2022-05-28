<template>
  <!-- Tag Sorting -->
  <div class="relative">
    <div class="ml2 mr2 overflow-hidden">
      <div id="carousel-container" class="flex mb2">
        <a
          v-for="(tag, index) in data"
          :key="index"
          href="#"
          :id="'tag-' + index"
          class="tag-filter px-4 text-black"
          @click="activateTag"
        >
          {{ data[index] }}
        </a>
      </div>
    </div>
    <!-- Left Arrow -->
    <button
      @click="toLeft"
      id="left-arrow"
      class="absolute opacity-70 text-2xl arrow left-0"
    >
      <ion-icon name="chevron-back-outline"></ion-icon>
    </button>
    <!-- Right Arrow -->
    <button
      @click="toRight"
      id="right-arrow"
      class="absolute opacity-70 text-2xl arrow right-0"
    >
      <ion-icon name="chevron-forward-outline"></ion-icon>
    </button>
  </div>
</template>

<style scoped>
.arrow {
  top: -10%;
}

.tag-filter {
  margin: 0 1%;
  background: #e0e0e0;
  border-radius: 10px;
  font-size: 12px;
  flex: 0 0 auto;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CarouselTag",
  props: ["data"],

  data() {
    return {
      clickCount: 0,
      activeTag: "tag-0",
    };
  },

  async created() {
    await this.data;
    this.disableNavigation();
    let tag = document.getElementById(this.activeTag);
    tag?.classList.add("bg-cyan", "text-white");
  },

  methods: {
    activateTag(event: any) {
      let tag = document.getElementById(this.activeTag);
      tag?.classList.remove("bg-cyan", "text-white");
      tag = document.getElementById(event.target.id);
      tag?.classList.add("bg-cyan", "text-white");
      this.activeTag = event.target.id;
    },
    toRight() {
      let carouselContainer = document.getElementById(
        "carousel-container"
      ) as HTMLElement;
      this.clickCount++;
      carouselContainer.style.transform = `translateX(${
        this.clickCount * -5
      }%)`;
      carouselContainer.style.transition = `transform 0.4s ease-in-out`;
      this.disableNavigation();
    },
    toLeft() {
      let carouselContainer = document.getElementById(
        "carousel-container"
      ) as HTMLElement;
      this.clickCount--;
      carouselContainer.style.transform = `translateX(${
        this.clickCount * -5
      }%)`;
      carouselContainer.style.transition = `transform 0.4s ease-in-out`;
      this.disableNavigation();
    },
    disableNavigation() {
      let rightArrow = document.getElementById(
        "right-arrow"
      ) as HTMLInputElement;
      let leftArrow = document.getElementById("left-arrow") as HTMLInputElement;
      if (this.clickCount === 0) {
        leftArrow.disabled = true;
        leftArrow.style.opacity = "30%";
        rightArrow.style.opacity = "70%";
      } else if (this.data.length - 3 === this.clickCount) {
        rightArrow.disabled = true;
        rightArrow.style.opacity = "30%";
        leftArrow.style.opacity = "70%";
      } else {
        leftArrow.disabled = false;
        rightArrow.disabled = false;
        leftArrow.style.opacity = "70%";
        rightArrow.style.opacity = "70%";
      }
    },
  },
});
</script>
