<template>
  <div class="m2">
    <TripLP></TripLP>
    <!-- Other Events -->
    <div class="grid grid-cols-4 gap-9 mt-3">
      <a
        v-for="(subEvent, index) in eventsData"
        :href="subEvent.link"
        :key="index"
      >
        <div
          class="border-60 sub-event-content relative overflow-hidden"
          :style="{
            background: 'url(' + subEvent.event_ImageURL + ')',
            'background-repeat': 'no-repeat',
            'background-size': '100% 100%',
          }"
        >
          <div class="sub-event-height">
            <div class="h-1/2"></div>
            <div class="relative sub-event-content h-1/2">
              <div class="absolute sub-event-text m-7 text-white">
                <p class="font-semibold text-2xl font-sora mb-0">
                  {{ subEvent.event_title }}
                </p>
                <p class="font-normal text-lg font-sora mb-0">
                  {{ mainEvent.date }}
                </p>
                <p class="font-normal text-lg font-sora">
                  {{ subEvent.event_location }}
                </p>
                <p
                  class="font-normal text-sm font-sora pb-3 mt-13 sub-event-desc"
                >
                  {{ subEvent.event_ShortDescription }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="css" scoped>
.line {
  border-right: 1px solid rgba(20, 46, 70, 0.65);
}

.events {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

@media screen and (max-width: 768px) {
  .sub-event-height {
    height: 370px;
  }
}

@media screen and (min-width: 1600px) {
  .sub-height {
    height: 500px;
  }
}

@media screen and (max-width: 1366px) {
  .sub-event-content {
    height: 370px;
    opacity: 0.96;
    transition: opacity 0.1s ease-in-out;
  }
}

@media screen and (min-width: 1600px) {
  .sub-event-content {
    height: 500px;
    opacity: 0.96;
    transition: opacity 0.1s ease-in-out;
  }
}

@media screen and (min-width: 1600px) {
  .sub-event-text {
    top: 38%;
    transition: top 0.1s ease-in-out;
  }

  .sub-event-content:hover .sub-event-text {
    top: -30%;
  }

  .sub-event-content:hover .sub-event-desc {
    margin-top: 20px !important;
  }
}

@media screen and (max-width: 1600px) {
  .sub-event-text {
    top: 3.5%;
    transition: top 0.1s ease-in-out;
  }

  .sub-event-content:hover .sub-event-text {
    top: -50%;
  }

  .sub-event-content:hover .sub-event-desc {
    margin-top: 20px !important;
  }
}

.sub-event-height {
  height: 370px;
}

.sub-event-content:hover {
  opacity: 1;
}

.sub-event-content {
  min-height: 370px;
  max-height: 781px;
  opacity: 0.96;
  transition: opacity 0.1s ease-in-out;
}

.events-btn {
  width: 224px;
  height: 51px;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 20px;
  background: #fff;
  transition: background 0.2s ease-in-out;
}

.events-btn:hover {
  background: #e7e7e7;
}
</style>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import TripLP from "../TripLP.vue";
import mainEventData from "../../../../../public/dummyData/mainEventDummy.json";

export default Vue.extend({
  name: "UpcomingEv",
  props: ["upcomingIdx"],
  components: { TripLP },

  data() {
    return {
      CMS_API: process.env.VUE_APP_CMS_API,
      eventsData: [],
      mainEvent: mainEventData,
    };
  },
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const eventsData = await axios.get(this.CMS_API + "/events");
      this.eventsData = eventsData.data.slice(0, 8);
    },
  },
});
</script>
