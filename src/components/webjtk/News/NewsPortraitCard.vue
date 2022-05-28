<template>
    <!-- Image, title, date, & category -->
    <div class="flex w-full">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="carousel-card mx-3 h-full"
      >
        <div>
          <img
            :src="item.img"
            class="w-full h-max bg-no-repeat bg-cover rounded-t"
          />
          <div class="m4">
            <p class="text-sm color-gray mb4">{{ item.date }} | {{ item.category }}</p>
            <p class="text-xl mb-0">{{ item.title }}</p>
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
  max-height: 370px;
}

.carousel-img {
  height: 262px;
  transition: opacity 0.4s ease-in-out;
}

</style>

<script>
export default {
    
}
</script>