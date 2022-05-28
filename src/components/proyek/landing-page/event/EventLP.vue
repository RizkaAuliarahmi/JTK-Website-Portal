<template>
  <!-- Events -->
  <div class="mt-20 pb-15 events">
    <!-- Events Contents -->
    <div v-if="activeEvent === true">
      <UpcomingEv :upcomingIdx="upcomingIdx" />
    </div>
    <div v-else>
      <OtherEv />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import UpcomingEv from "./UpcomingEv.vue";
import OtherEv from "./OtherEv.vue";

export default Vue.extend({
  components: { UpcomingEv, OtherEv },
  name: "EventLP",

  data() {
    return {
      CMS_API: process.env.VUE_APP_CMS_API,
      eventsData: [],
      upcomingIdx: 0,
      activeEvent: false,
    };
  },
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      let now = new Date();
      let i = 0;
      const eventsData = await axios.get(this.CMS_API + "/events");
      this.eventsData = eventsData.data.slice(0, 8);
      while (this.activeEvent === false && i < this.eventsData.length) {
        if (now < new Date(this.eventsData[i]["end_date"])) {
          this.upcomingIdx = i;
          this.activeEvent = true;
        }
        i++;
      }
    },
  },
});
</script>
