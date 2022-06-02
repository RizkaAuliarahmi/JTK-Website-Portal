<template>
  <div class="py-8" style="background-color: #1a4167">
    <h5
      class="text-4xl font-medium font-montserrat text-align-center"
      style="color: white"
    >
      Acara
    </h5>
    <div class="flex my-10">
      <EventCard v-if="newsData" :data="newsData" :isIndex="true" />
    </div>
    <v-layout align-center justify-center>
      <v-btn color="orange"> Lebih Banyak </v-btn>
    </v-layout>
  </div>
</template>

<script>
import Vue from "vue";
import EventCard from "./EventCard.vue";
import newsData from "@/dummy/news-dummy.json";

export default Vue.extend({
  name: "RecentEvent",
  components: {
    EventCard,
  },
  data() {
    return {
      CMS_API: process.env.APP_CMS_API,
      newsData: newsData,
      pageData: [{}],
    };
  },
});
</script>

<style scoped>
.text-align-center {
  text-align: center;
}
</style>