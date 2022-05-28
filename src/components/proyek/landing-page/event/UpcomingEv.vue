<template>
  <div class="grid grid-cols-2 m2">
    <div class="line pr-4">
      <div class="flex items-end justify-between mb-5">
        <TripLP></TripLP>
        <button class="events-btn color-gray">See upcoming events</button>
      </div>
      <!-- Upcoming Events -->
      <a :href="mainEvent.link">
        <div
          v-if="eventsData[0]"
          class="border-20 relative upcoming-event-content overflow-hidden"
          :style="{
            background: 'url(' + eventsData[0].event_ImageURL + ')',
            'background-repeat': 'no-repeat',
            'background-size': '100% 100%',
          }"
        >
          <div class="upcoming-height">
            <div class="h-1/2"></div>
            <div class="relative upcoming-event-text h-1/2">
              <div class="absolute m-7 text-white">
                <div>
                  <p class="font-semibold text-5xl font-sora mb-0">
                    {{ eventsData[0].event_title }}
                  </p>
                  <p class="font-normal text-2xl font-sora mb-0">
                    {{ mainEvent.date }}
                  </p>
                  <p class="font-normal text-2xl font-sora">
                    {{ eventsData[0].event_location }}
                  </p>
                  <p class="font-normal text-lg font-sora pb-3 mt-10">
                    {{ eventsData[0].event_ShortDescription }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
    <!-- Other Events -->
    <div class="grid content-center ml-4 mr-5">
      <div class="flex justify-end 2xl:mt-8">
        <button class="m-2 events-btn color-gray">See all events</button>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-3">
        <a
          v-for="(subEvent, index) in eventsData.slice(1)"
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
                  <p class="font-normal text-sm font-sora pb-3 mt-13">
                    {{ subEvent.event_ShortDescription }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
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

  .upcoming-height {
    height: 781px;
  }
}

@media screen and (min-width: 1600px) {
  .sub-height {
    height: 500px;
  }

  .upcoming-height {
    height: 1000px;
  }
}

@media screen and (max-width: 768px) {
  .sub-event-content {
    height: 370px;
    filter: brightness(90%);
    transition: brightness 0.1s ease-in-out;
  }

  .upcoming-event-content {
    height: 781px;
    filter: brightness(90%);
    transition: brightness 0.1s ease-in-out;
  }
}

@media screen and (min-width: 1600px) {
  .sub-event-content {
    height: 500px;
    filter: brightness(90%);
    transition: brightness 0.1s ease-in-out;
  }

  .upcoming-event-content {
    height: 1000px;
    filter: brightness(90%);
    transition: brightness 0.1s ease-in-out;
  }
}

@media screen and (min-width: 1600px) {
  .sub-event-text {
    top: 40%;
    transition: top 0.1s ease-in-out;
  }

  .sub-event-content:hover .sub-event-text {
    top: -30%;
  }

  .sub-event-content:hover .sub-event-desc {
    margin-top: 20px !important;
  }

  .upcoming-event-text {
    top: 55%;
    transition: top 0.1s ease-in-out;
  }

  .upcoming-event-content:hover .upcoming-event-text {
    top: 25%;
  }
}

@media screen and (max-width: 1600px) {
  .sub-event-text {
    top: 4%;
    transition: top 0.1s ease-in-out;
  }

  .sub-event-content:hover .sub-event-text {
    top: -50%;
  }

  .sub-event-content:hover .sub-event-desc {
    margin-top: 20px !important;
  }

  .upcoming-event-text {
    top: 20%;
    transition: top 0.1s ease-in-out;
  }

  .upcoming-event-content:hover .upcoming-event-text {
    top: -3%;
  }
}

.sub-event-height {
  height: 370px;
}

.upcoming-height {
  height: 781px;
}

.sub-event-content {
  min-height: 370px;
  max-height: 781px;
  filter: brightness(90%);
  transition: brightness 0.1s ease-in-out;
}

.sub-event-content:hover {
  filter: brightness(100%);
}

.upcoming-event-content {
  filter: brightness(90%);
  min-height: 781px;
  transition: brightness 0.1s ease-in-out;
}

.upcoming-event-content:hover {
  filter: brightness(100%);
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
      this.eventsData = eventsData.data.slice(0, 5);
      let upcomingEv = this.eventsData.splice(this.upcomingIdx, 1);
      this.eventsData.unshift(upcomingEv[0]);
    },
  },
});
</script>
