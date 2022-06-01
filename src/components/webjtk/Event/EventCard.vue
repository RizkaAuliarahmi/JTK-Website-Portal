<template>
  <!-- Image, title, date, time-->
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
            <p class="text-sm color-gray mb4">
              {{ data[index].last_update }} |
              {{ data[index].news_category_title }}
            </p>
            <p class="text-xl mb-0">{{ data[index].title }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="flex grid grid-cols-5 gap-2 w-full mx-3 px-7 pr-4">
      <div
        v-for="(item, index) in 5"
        :key="index"
        class="carousel-card mx-5 h-full"
      >
        <div @click="goTo(data[index].slug)">
          <img
            :src="data[index].banner_image"
            class="w-full h-max bg-no-repeat bg-cover rounded-t"
          />
          <div class="m4">
            <p class="text-sm color-gray mb4">
              {{ data[index].last_update }} |
              {{ data[index].news_category_title }}
            </p>
            <a :href="data[index].detail_url" class="text-m mb-0">{{
              data[index].title
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: ["data", "isIndex"],
  methods: {
    // eslint-disable-next-line
    goTo(id) {
      this.$router.push({
        name: "<Event Title> | Acara | Jurusan Teknik Komputer dan Informatika POLBAN",
        params: { id: id },
      });
    },
  },
};
</script>

<style scoped>
.carousel-card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  flex: 0 0 31.25%;
  height: 370px !important;
  width: auto;
  background-color: white;
}

.h-max {
  width: auto;
  height: 230px;
}
</style>