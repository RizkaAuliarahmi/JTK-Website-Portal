<template>
  <div class="grid grid-cols-2 gap-4 ml-2 mr-2 mb-2">
    <div v-for="(item, index) in data" :key="index" class="item-card ml-2 mb-7">
      <div class="flex">
        <img :src="data[index].image_url" class="item-img" />
        <div class="ml3 mb2 flex flex-col w-3/5">
          <!-- Date & Category -->
          <p class="color-gray text-sm my-1">{{ data.date }} | {{ data.category }}</p>
          <!-- Title -->
          <a
            :href="data[index].detail_url"
            class="font-bold font-lato text-black text-2xl mb2 mt3"
          >
            {{ data[index].title }}
          </a>
          <!-- Desc -->
          <div class="flex mb-1">
            <p class="color-black text-sm my-1">{{ data.description }}</p>
            <a class="color-black text-sm my-1">lihat semua</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item-card {
  height: 150px;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  border-radius: 15px;
}

.item-img {
  width: 150px;
  height: 150px;
  border-radius: 15px 0 0 15px;
}
</style>

<script>
export default {
    name: "LandscapeCard",
    props: ["data"],
}
</script>