<template>
  <div>
    <div class="Chart">
      <DoughnutChart />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import DoughnutChart from "../components/webjtk/Chart/DoughnutChart.vue";

export default Vue.extend({
  name: "AchievementList",
  components: {
    DoughnutChart,
  },
});
</script>

<style scoped>
.Chart {
  width: 400px;
  height: 300px;
}
</style>