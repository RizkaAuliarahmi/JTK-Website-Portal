<template>
  <div class="flex w-full">
    <div v-if="isIndex === false">
      <div class="grid grid-cols-2 gap-4 ml-2 mr-2 mb-2">
        <div v-for="(item, index) in data" :key="index" class="item-card ml-2 mb-7">
          <div class="flex">
            <img :src="data[index].banner_image" class="item-img" />
            <div class="ml3 mb2 flex flex-col w-3/5">
              <!-- Date & Category -->
              <p class="color-gray text-sm my-1">{{ data[index].last_update }}</p>
              <div class="flex mb-1">
                <p class=" color-gray text-sm my-1">
                    {{ data[index].news_category_title }}
                </p>
              </div>
              <!-- Title -->
              <a
                href="#"
                class="font-bold font-lato text-black text-2xl mb2 mt3"
              >
                {{ data[index].title }}
              </a>
              <!-- Desc -->
              <div class="flex mb-1">
                <p class="color-black text-sm my-1">{{ data[index].description }}</p>
                <a href="#" class="color-black text-sm my-1">lihat semua</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="grid grid-cols-2 gap-4 ml-2 mr-2 mb-2">
        <div v-for="(item, index) in 2" :key="index" class="item-card ml-2 mb-7">
          <div class="flex">
            <img :src="data[index].banner_image" class="item-img" />
            <div class="ml3 mb2 flex flex-col w-3/5">
              <!-- Date & Category -->
              <p class="color-gray text-sm my-1">{{ data[index].last_update }}</p>
              <div class="flex mb-1">
                <p class=" color-gray text-sm my-1">
                    {{ data[index].news_category_title }}
                </p>
              </div>
              <!-- Title -->
              <a
                :href="data[index].detail_url"
                class="font-bold font-lato text-black text-2xl mb2 mt3"
              >
                {{ data[index].title }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item-card {
  height: 260px;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  border-radius: 15px;
}

.item-img {
  width: 255px;
  height: 260px;
  border-radius: 15px 0 0 15px;
}
</style>

<script>
export default {
    name: "NewsLandscapeCard",
    props: ["data", "isIndex"],
}
</script>