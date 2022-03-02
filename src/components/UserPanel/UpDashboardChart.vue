<template>
  <div class="row" id="to-hide">
    <div class="col-12 col-xl-3">
      <div class="content-user__dashboard__wrapper__sidebar__item">
        <div class="content-user__dashboard__wrapper__sidebar__item__background"></div>
        <div class="content-user__dashboard__wrapper__sidebar__item__changes-chart">
          <div
            class="content-user__dashboard__wrapper__sidebar__item__changes-chart__icon"
          >
            <img src="@/assets/svg/activity.svg" alt="" />
          </div>
          <div
            class="content-user__dashboard__wrapper__sidebar__item__changes-chart__text"
          >
            <span>نمودار تغییرات</span>
          </div>
          <div
            class="content-user__dashboard__wrapper__sidebar__item__changes-chart__banner"
          >
            <up-dashboard-chart-flag
              v-for="(item, i) in flags"
              :key="i"
              :active="activeToken == i"
              :alt="item.alt"
              :image="item.src"
              @click="activeToken = i"
            ></up-dashboard-chart-flag>
          </div>
          <div
            class="content-user__dashboard__wrapper__sidebar__item__changes-chart__btn"
          >
            <a href="#" @click.prevent="onClickHide">مخفی کردن نمایش نمودار</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-xl-9">
      <div class="content-user__dashboard__wrapper__content__chart" style="height: 250px">
        <canvas id="chart"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
import irFlag from "../../assets/img/IR.png";
import usFlag from "../../assets/img/US.png";
import euFlag from "../../assets/img/FM.png";
import "../../../node_modules/chart.js/dist/chart";
import UpDashboardChartFlag from "./UpDashboardChartFlag.vue";
export default {
  components: { UpDashboardChartFlag },
  name: "UpDashboardChart",
  methods: {
    onClickHide() {
      let e = document.getElementById("to-hide");
      e.style.height = `${e.scrollHeight}px`;
      setTimeout(() => {
        e.style.height = 0;
      }, 2);
    },
  },
  data() {
    return {
      flags: [
        { src: irFlag, alt: "" },
        { src: usFlag, alt: "" },
        { src: euFlag, alt: "" },
      ],
      activeToken: 0,
    };
  },
  mounted() {
    var date = ["0", "4 آذر", "5 آذر", "6 آذر", "7 آذر", "8 آذر"];
    var price = [0, 350000, 160000, 360000, 260000, 460000];
    var ctx = document.getElementById("chart").getContext("2d"),
      gradient = ctx.createLinearGradient(0, 0, 0, 450);
    gradient.addColorStop(0, "rgba(0, 255, 209, 0.15)");
    gradient.addColorStop(0.5, "rgba(0, 255, 209, 0)");
    gradient.addColorStop(1, "rgba(0, 255, 209, 0)");
    Chart.defaults.font.family = "dana";

    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: date,
        datasets: [
          {
            fill: true,
            backgroundColor: gradient,
            borderColor: "#00FFD1",
            pointBackgroundColor: "#00FFD1",
            pointBorderColor: "#00FFD1",
            pointBorderWidth: 4,
            pointHoverRadius: 12,
            pointHoverBorderColor: "#fff",
            pointHoverBorderWidth: 3,
            borderWidth: 2,
            data: price,
            cubicInterpolationMode: "monotone",
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#E2DFF0",
            },
            grid: {
              display: false,
              borderColor: "#434159",
            },
          },
          y: {
            ticks: {
              color: "#A3A0B8",
            },
            grid: {
              display: false,
              borderColor: "#434159",
            },
          },
        },
        elements: {
          point: {
            radius: 0,
          },
        },
      },
    });
    myChart.options.plugins.legend = false;

    console.log(myChart);
  },
};
</script>
