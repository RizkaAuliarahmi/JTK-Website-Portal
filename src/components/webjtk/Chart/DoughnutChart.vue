<template>
  <div>
    <canvas id="doughnut-chart"></canvas>
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
    const ctx = document.getElementById("doughnut-chart");
    new Chart(ctx, this.doughnutChartData);
  },
};
</script>

<style scoped>
</style>