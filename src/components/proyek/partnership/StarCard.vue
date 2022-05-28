<template>
  <div v-if="stars >= 0 && stars <= 5" class="flex">
    <div class="my-1 flex" v-for="index in stars" :key="index">
      <ion-icon class="color-yellow mr-1" name="star"></ion-icon>
    </div>
    <div class="my-1 flex" v-for="index in 5 - stars" :key="'a' + index">
      <ion-icon class="color-yellow mr-1" name="star-outline"></ion-icon>
    </div>
  </div>
</template>

<style scoped></style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "StarCard",
  props: ["stars"],
});
</script>
