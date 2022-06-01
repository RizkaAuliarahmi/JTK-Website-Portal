<template>
    <!-- Image, title, date, & category -->
    <div class="flex w-full">
      <div v-if="isIndex === false">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="carousel-card mx-3 h-full"
        >
          <div>
            <img
              :src="data[index].banner_image"
              class="w-full h-max bg-no-repeat bg-cover rounded-t"
            />
            <div class="m4">
              <p class="text-sm color-gray mb4">{{ data[index].last_update }} | {{ data[index].news_category_title }}</p>
              <p class="text-xl mb-0">{{ data[index].title }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="flex grid grid-cols-3 gap-7 w-full mx-3 px-7 pr-4">
        <div
          v-for="(item, index) in 3"
          :key="index"
          class="carousel-card mx-5 h-full"
        >
          <div>
            <img
              :src="data[index].banner_image"
              class="w-full h-max bg-no-repeat bg-cover rounded-t"
            />
            <div class="m4">
              <p class="text-sm color-gray mb4">{{ data[index].last_update }} | {{ data[index].news_category_title }}</p>
              <a :href="data[index].detail_url" class="text-xl mb-0">{{ data[index].title }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.carousel-card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  flex: 0 0 31.25%;
  height: 370px !important;
  width: 314px;
}

.h-max {
  width: auto;
  height: 230px;
}

</style>

<script>
export default {
  name: "NewsPortraitCard",
  props: ["data", "isIndex"],
}
</script>