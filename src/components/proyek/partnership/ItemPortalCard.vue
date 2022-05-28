<template>
  <div>
    <div v-for="(item, index) in data" :key="index" class="item-card ml-2 mb-7">
      <div class="flex">
        <img :src="data[index].image_url" class="item-img" />
        <div class="ml3 mb2 flex flex-col w-3/5">
          <!-- Name -->
          <a
            :href="data[index].detail_url"
            class="font-bold font-lato text-black text-2xl mb2 mt3"
          >
            {{ data[index].name }}
          </a>
          <!-- Category -->
          <p
            class="item-category color-cyan w-max px-5 font-lato text-sm text-center mb2"
          >
            {{ data[index].category }}
          </p>
          <!-- Stars -->
          <StarCard :stars="data[index].star" />
          <!-- No Radio Button Filter (Restaurant) -->
          <div v-if="isRadioBtn === false">
            <!-- Price -->
            <div class="flex">
              <ion-icon
                class="color-cyan mr2 pt-4"
                name="cash-outline"
              ></ion-icon>
              <p class="font-normal font-lato color-navyblue text-xl my-3">
                {{ data[index].minimum_price }} -
                {{ data[index].maximum_price }}/people
              </p>
            </div>
            <!-- Location -->
            <div>
              <ion-icon name="location-sharp" class="color-cyan mr1"></ion-icon>
              <span
                class="font-normal font-lato text-sm color-cyan text-l my-3"
              >
                {{ data[index].location_text }}
              </span>
            </div>
          </div>
          <!-- With Radio Button Filter (Accomodation) -->
          <div v-else class="mt2">
            <!-- Location -->
            <ion-icon name="location-sharp" class="color-cyan mr1"></ion-icon>
            <span class="font-normal font-lato text-sm color-cyan text-l my-3">
              {{ data[index].location_text }}
            </span>
          </div>
          <!-- Facility Tags -->
          <div class="mt2 flex flex-wrap mt-auto">
            <div
              v-for="(tag, idx) in data[index].facilities"
              class="item-tag grow-0 px-4"
              href="#"
              :key="idx"
            >
              {{ data[index].facilities[idx] }}
            </div>
          </div>
        </div>
        <div
          v-if="isRadioBtn === true"
          class="flex flex-col order-card justify-end items-center ml-auto"
        >
          <!-- Order Card -->
          <div class="pb-5 text-center">
            <div class="font-normal font-lato color-navyblue text-xs">
              {{ data[index].minimum_price }} -
              {{ data[index].maximum_price }}
            </div>
            <a class="hover:underline font-lato color-cyan text-xs mb2" href="#"
              >Order Now</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.order-card {
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  border-radius: 0 15px 15px 0;
  flex: 0 0 18%;
}

.item-category {
  background: #ffffff;
  border: 1px solid #00b4a7;
  box-sizing: border-box;
  border-radius: 30px;
}

.item-card {
  height: 280px;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  border-radius: 15px;
}

.item-tag {
  margin: 5px 1%;
  background: rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  font-size: 12px;
}

.item-img {
  width: 310px;
  height: 280px;
  border-radius: 15px 0 0 15px;
}
</style>

<script lang="ts">
import Vue from "vue";
import StarCard from "../partnership/StarCard.vue";

export default Vue.extend({
  components: { StarCard },
  name: "ItemPortalCard",
  props: ["data", "isRadioBtn"],
});
</script>
