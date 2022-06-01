<template>
  <div>
    <div class="grid grid-cols-3 gap-20 mx-32">
      <div><canvas class="doughnut-chart w-full"></canvas></div>
      <div><canvas class="doughnut-chart2 w-full"></canvas></div>
      <div><canvas class="doughnut-chart3 w-full"></canvas></div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

const doughnutChartData = {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 15,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 25,
          },
        },
      ],
    },
  },
};

export default {
  name: "DoughnutChart",
  // eslint-disable-next-line
  data() {
    return {
      doughnutChartData: doughnutChartData,
    };
  },
  // eslint-disable-next-line
  mounted() {
    const ctx = document.getElementsByClassName("doughnut-chart");
    new Chart(ctx, this.doughnutChartData);
    const ctx2 = document.getElementsByClassName("doughnut-chart2");
    new Chart(ctx2, this.doughnutChartData);
    const ctx3 = document.getElementsByClassName("doughnut-chart3");
    new Chart(ctx3, this.doughnutChartData);
  },
};
</script>

<style scoped>
.mx-32{
  margin: 0px 110px 0px 110px;
}
</style>