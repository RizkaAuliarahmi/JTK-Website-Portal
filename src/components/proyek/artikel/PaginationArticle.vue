<template>
  <div class="flex justify-center font-lato mb2">
    <nav class="flex items-center">
      <a
        href="#"
        @click="backPage"
        :class="{
          'pagination-item-active': currentPage === 1,
          'pagination-item': currentPage !== 1,
        }"
        >Back</a
      >
      <div v-if="currentPage >= pageRange-1"> 
        <a href="#" @click="goToPage(1)" class="pagination-item">1</a>
      </div>
      <span v-if="itemStart > 1" class="mr-1">...</span>
      <span v-if="itemStart > 1">/</span>
      <div
        v-for="pageNumber in pageNumbers.slice(itemStart - 1, itemStop)"
        :key="pageNumber"
      >
        <a
          href="#"
          @click="goToPage(pageNumber)"
          :class="{
            'pagination-item-active': pageNumber === currentPage,
            'pagination-item': pageNumber !== currentPage,
          }"
          >{{ pageNumber }}</a
        >
        <span :class="{ hidden: pageNumber === itemStop }">/</span>
      </div>
      <div v-if="itemStop < totalPages - 1">
        <span class="mr-1">...</span>
        <a href="#" @click="goToPage(totalPages)" class="pagination-item">{{
          totalPages
        }}</a>
      </div>
      <a
        href="#"
        @click="nextPage"
        :class="{
          'pagination-item-active': currentPage === totalPages,
          'pagination-item': currentPage !== totalPages,
        }"
        >Next</a
      >
    </nav>
  </div>
</template>

<style scoped>
.pagination-item-active {
  color: #00b4a7;
  pointer-events: none;
  font-size: 16px;
  text-decoration: none;
  margin: 0 4px;
}

.pagination-item:hover {
  color: #00b4a7;
}

.pagination-item {
  color: #142e46;
  font-size: 16px;
  text-decoration: underline;
  margin: 0 4px;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Pagination",
  props: ["data", "perPage", "pageRange"],

  data() {
    return {
      totalPages: 1,
      itemStart: 0,
      itemStop: 0,
      currentPage: 1,
      pageNumbers: [0],
      pageData: [{}],
    };
  },

  methods: {
    passPageData() {
      this.$emit("passedPageData", this.pageData);
    },

    updatePageData() {
      this.pageData = this.data.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },

    updateStartStop() {
      if (this.currentPage <= Math.floor((this.pageRange - 1) / 2)) {
        this.itemStart = 1;
      } else {
        this.itemStart =
          this.currentPage - Math.floor((this.pageRange - 1) / 2);
      }
      if (
        this.currentPage >=
        this.totalPages - Math.ceil((this.pageRange - 1) / 2)
      ) {
        this.itemStop = this.totalPages;
      } else {
        this.itemStop = this.currentPage + Math.ceil((this.pageRange - 1) / 2);
      }
      this.updatePageData();
      this.passPageData();
    },

    goToPage(page: number) {
      this.currentPage = page;
      this.updateStartStop();
    },
    backPage() {
      this.currentPage -= 1;
      this.updateStartStop();
    },
    nextPage() {
      this.currentPage += 1;
      this.updateStartStop();
    },
    firstPage() {
      this.currentPage = 1;
      this.updateStartStop();
    },
  },

  created() {
    this.totalPages = Math.ceil(this.data.length / this.perPage);
    this.updateStartStop();
    for (let i = 1; i <= this.totalPages; i++) {
      this.pageNumbers[i - 1] = i;
    }
    
    this.pageData = this.data.slice(
      this.currentPage * 0 * this.perPage,
      this.currentPage * this.perPage
    );
    console.log("this.currentPage * 0 * this.perPage, "  + this.currentPage * 0 * this.perPage)
    console.log("this.currentPage * this.perPage" + this.currentPage * this.perPage)
    this.passPageData();
  },
});
</script>
