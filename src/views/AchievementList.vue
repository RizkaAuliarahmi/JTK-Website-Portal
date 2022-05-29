<template>
  <div>
    <DoughnutChart />
  </div>
</template>

<script>
import Vue from "vue";
import DoughnutChart from "../components/webjtk/DoughnutChart.vue";

export default Vue.extend({
  name: "AchievementList",
  components: {
    DoughnutChart,
  },
});
</script>