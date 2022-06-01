<template>
  <div class="grid grid-cols-2 gap-4 ml-2 mr-2 mb-2">
    <div v-for="(item, index) in data" :key="index" class="item-card ml-2 mb-7">
      <div class="flex">
        <img :src="data[index].banner_image" class="item-img" />
        <div class="ml3 mb2 flex flex-col w-3/5">
          <!-- Date & Category -->
          <p class="color-gray text-sm my-1">{{ data[index].last_update }} | {{ data[index].news_category_title }}</p>
          <!-- Title -->
          <a
            :href="data[index].detail_url"
            class="font-bold font-lato text-black text-m mb2 mt3"
          >
            {{ data[index].title }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item-card {
  height: 151px;
  border: 1px solid #222020;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: white;
}

.item-img {
  width: 150px;
  height: 150px;
  border-radius: 5px 0 0 5px;
}
</style>

<script>
export default {
    name: "LandscapeCard",
    props: ["data"],
}
</script>