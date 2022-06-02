<template>
  <!-- Detail Tabs -->
  <div class="flex mb1">
    <div v-for="(item, index) in data" :key="index">
      <div
        v-if="index === 0"
        onclick="#"
        class="detail-tab detail-tab-active text-sm m-1 py-2 px-4"
      >
        {{ item }}
      </div>
      <div
        v-else
        onclick="#"
        class="detail-tab detail-tab-inactive text-sm m-1 py-2 px-4"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-tab-active {
  border-bottom: 2px solid blue;
  box-sizing: border-box;
  color: blue;
}

.detail-tab-inactive {
  color: #0000008a;
}

.detail-tab:hover {
  background: #e0e0e0;
}

.detail-tab {
  cursor: pointer;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DetailTabs",
  props: ["data"],
});
</script>
