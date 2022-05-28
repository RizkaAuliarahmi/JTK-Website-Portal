<template>
  <!-- Main Articles -->
  <div class="mt-20">
    <div class="flex justify-between items-end mb-5 mx-5">
      <TripLP></TripLP>
      <button class="m-2 see-all-content-btn color-gray">
        See all articles
      </button>
    </div>
    <div>
      <div
        class="flex justify-center items-center main-articles-container absolute w-screen"
      >
        <p
          class="article-text font-lato text-white text-8xl font-black text-center w-4/5 cursor-default absolute z-10"
        >
          Discover story-worthy travel moments
        </p>
      </div>
      <div class="z-0 main-articles-container bg-black grid grid-cols-3">
        <a
          v-for="(article, index) in articlesData"
          :href="'article/' + article.slug"
          :key="index"
        >
          <div
            class="main-articles h-full flex items-end text-xl font-bold"
            :style="{
              background: 'url(' + article.banner_image[0].url + ')',
              'background-repeat': 'no-repeat',
              'background-size': '100% 100%',
            }"
          >
            <div class="flex w-full">
              <div class="flex w-4/5 ml-6 mb-8">
                <span class="text-4xl font-bold font-lato text-white">
                  {{ article.title }}
                </span>
              </div>
              <div class="relative flex justify-center items-center">
                <span class="main-articles-arrow absolute text-white text-4xl"
                  >🡢</span
                >
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article-text {
  text-shadow: 3px 3px rgba(0, 0, 0, 0.25);
}

.main-articles {
  opacity: 0.8;
  transition: opacity 0.35s ease-in-out;
}

.main-articles:hover {
  opacity: 1;
}

.main-articles-arrow {
  left: 0;
  transition: left 0.2s ease-in-out;
}

.main-articles:hover .main-articles-arrow {
  left: 10px;
}

.main-articles-container {
  height: 700px;
}
</style>

<script lang="ts">
import Vue from "vue";
import TripLP from "./TripLP.vue";
import axios from "axios";

export default Vue.extend({
  components: { TripLP },
  name: "ArticleLP",

  data() {
    return {
      CMS_API: process.env.VUE_APP_CMS_API,
      articlesData: [],
    };
  },
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const articlesData = await axios.get(this.CMS_API + "/articles");
      this.articlesData = articlesData.data.slice(0, 3);
    },
  },
});
</script>
