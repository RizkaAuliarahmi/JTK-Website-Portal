<template>
  <div class="mt3">
    <p class="text-4xl font-bold mb3">{{ title }}</p>
    <div class="relative">
      <!-- Image Only -->
      <div
        v-if="isDescription === false"
        :id="'carousel-container-' + title"
        class="flex w-full"
      >
        <div
          v-for="(item, index) in data"
          :key="index"
          class="carousel-card mx-3 h-full bg-black"
          style="height: 332px !important"
        >
          <div
            :class="{
              'inactive-card': index < activeRange - 3 || index >= activeRange,
              'active-card': index >= activeRange - 3 && index < activeRange,
            }"
          >
            <div class="relative overflow-hidden">
              <img
                :src="item.img"
                class="w-full bg-no-repeat bg-cover rounded-t carousel-img"
              />
              <div class="route-guide text-base font-bold text-white">
                <p>Route :</p>
                <div v-for="(item2, index2) in item.itinerary" :key="index2">
                  <div v-if="index2 < item.itinerary.length - 1">
                    <p class="mb-0">{{ item2 }}</p>
                    <img
                      src="/img/icons/geowisata/bottom-arrow.png"
                      class="h-6 w-6 my-3 ml-auto mr-auto"
                    />
                  </div>
                  <div v-else-if="index2 === item.itinerary.length - 1">
                    <p class="mb-0">{{ item2 }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Image, title and description -->
      <div v-else :id="'carousel-container-' + title" class="flex w-full">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="carousel-card mx-3 h-full"
        >
          <div
            :class="{
              'inactive-card': index < activeRange - 3 || index >= activeRange,
              'active-card': index >= activeRange - 3 && index < activeRange,
            }"
          >
            <img
              :src="item.img"
              class="w-full h-max bg-no-repeat bg-cover rounded-t"
            />
            <div class="m4">
              <p class="text-xl mb-0">{{ item.title }}</p>
              <p class="text-sm color-gray mb4">{{ item.sub_title }}</p>
              <p class="text-base color-gray">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Left Arrow -->
      <button
        @click="toPrevCard"
        :id="'prev-card' + title"
        class="absolute text-5xl left-arrow"
      >
        <img
          src="/img/icons/geowisata/rounded-left-arrow.png"
          class="h-10 w-10"
        />
      </button>
      <!-- Right Arrow -->
      <button
        @click="toNextCard"
        :id="'next-card' + title"
        class="absolute text-5xl right-arrow"
      >
        <img
          src="/img/icons/geowisata/rounded-right-arrow.png"
          class="h-10 w-10"
        />
      </button>
    </div>
  </div>
</template>

<style scoped>
.carousel-card:hover .route-guide {
  top: 16%;
}

.route-guide {
  position: absolute;
  top: -100%;
  left: 0;
  right: 0;
  text-align: center;
  transition: top 0.4s ease-in-out;
}

.carousel-card:hover .carousel-img {
  opacity: 50%;
}

.carousel-img {
  height: 332px;
  transition: opacity 0.4s ease-in-out;
}

.inactive-card {
  opacity: 50%;
  transition: opacity 0.4s ease-in-out;
}

.active-card {
  opacity: 100%;
  transition: opacity 0.4s ease-in-out;
}

.left-arrow {
  top: 40%;
  left: 0;
}

.right-arrow {
  top: 40%;
  right: 0;
}

.top1 {
  top: 1%;
}

.carousel-card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  flex: 0 0 31.25%;
  height: 474px !important;
}

.h-max {
  max-height: 233px;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Carousel",
  props: ["data", "title", "isDescription"],

  data() {
    return {
      activeRange: 3,
      clickCount: 0,
    };
  },

  async created() {
    await this.data;
    this.disableNavigationCard();
  },

  methods: {
    toNextCard() {
      let carouselContainer = document.getElementById(
        `carousel-container-${this.title}`
      ) as HTMLElement;
      this.activeRange++;
      this.clickCount++;
      carouselContainer.style.transform = `translateX(${
        this.clickCount * -33
      }%)`;
      carouselContainer.style.transition = `transform 0.4s ease-in-out`;
      this.disableNavigationCard();
    },
    toPrevCard() {
      let carouselContainer = document.getElementById(
        `carousel-container-${this.title}`
      ) as HTMLElement;
      this.activeRange--;
      this.clickCount--;
      carouselContainer.style.transform = `translateX(${
        this.clickCount * -33
      }%)`;
      carouselContainer.style.transition = `transform 0.4s ease-in-out`;
      this.disableNavigationCard();
    },
    disableNavigationCard() {
      let nextCard = document.getElementById(
        `next-card${this.title}`
      ) as HTMLInputElement;
      let prevCard = document.getElementById(
        `prev-card${this.title}`
      ) as HTMLInputElement;
      if (this.clickCount === 0) {
        prevCard.disabled = true;
        prevCard.style.opacity = "60%";
        nextCard.style.opacity = "100%";
      } else if (this.data.length - 3 === this.clickCount) {
        nextCard.disabled = true;
        nextCard.style.opacity = "60%";
        prevCard.style.opacity = "100%";
      } else {
        prevCard.disabled = false;
        nextCard.disabled = false;
        prevCard.style.opacity = "100%";
        nextCard.style.opacity = "100%";
      }
    },
  },
});
</script>
