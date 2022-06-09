<template>
    <!-- Image, title, date, & category -->
    <div class="flex w-full">
      <div v-if="isPartnership === true" class="grid grid-cols-5 gap-7 mx-20 mb-2">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="carousel-card mx-3 h-full"
        >
          <div>
            <img
              :src="data[index].partner_image"
              class="w-full h-max bg-no-repeat bg-cover rounded-t"
            />
            <div class="m4">
              <p class="text-sm color-gray mx-2 my-1">{{ data[index].partner_name }} </p>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="grid grid-cols-2 gap-7 mx-20 mb-2">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="carousel-card mx-3 h-full"
        >
          <div>
            <img
              :src="data[index].dept_image.url"
              class="w-full h-max bg-no-repeat bg-cover rounded-t"
            />
            <div class="m4">
              <p class="text-sm color-gray mx-2 my-1">{{ data[index].department_title}} </p>
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
  height: 240px !important;
  width: auto;
}

.h-max {
  width: auto;
  height: 200px;
}

</style>

<script>
export default {
  name: "Partnership Gallery",
  props: ["data", "isPartnership"],
}
</script>