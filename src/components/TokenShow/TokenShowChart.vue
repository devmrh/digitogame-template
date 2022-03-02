<template>
  <div class="token__wrapper__row">
    <div :class="{ 'token__wrapper__row__col-small': true, inview: isSmall }">
      <div class="token__wrapper__row__col-small__item" ref="miniDiv">
        <div class="token__wrapper__row__col-small__item__title">
          <div class="token__wrapper__row__col-small__item__title__text">
            <img :src="flag" :alt="flagAlt" />
            <h3>{{ name }}</h3>
          </div>
          <div class="token__wrapper__row__col-small__item__title__icon">
            <i class="dn-refresh"></i>
          </div>
        </div>
        <div class="token__wrapper__row__col-small__item__price">
          <ul>
            <li>{{ formatPrice(price) }} <img src="@/assets/img/daler.png" alt="" /></li>
            <li>
              {{ formatPrice(change) }}
              <i :class="{ 'dn-icon-top': raising, 'dn-icon-bottom': !raising }"
                ><span class="path1"></span><span class="path2"></span
              ></i>
            </li>
          </ul>
        </div>
        <div class="token__wrapper__row__col-small__item__chart">
          <div class="token__wrapper__row__col-small__item__chart__title">
            <p>نمودار آخرین تغییرات</p>
          </div>
          <div class="token__wrapper__row__col-small__item__chart__diagram">
            <canvas :id="miniChart" height="84"></canvas>
          </div>
        </div>
        <div class="token__wrapper__row__col-small__item__update">
          <span>آخرین بروزرسانی</span>
          <span>{{ date }}</span>
        </div>
      </div>
    </div>
    <div class="token__wrapper__row__col-big inview">
      <div class="token__wrapper__row__col-big__chart" ref="myBig">
        <div :id="chartId"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatPrice } from "../../assets/js/script";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
import image from "../../assets/img/daler.png";
export default {
  name: "TokenShowChart",
  props: [
    "change",
    "price",
    "name",
    "date",
    "flag",
    "flagAlt",
    "raising",
    "prices",
    "dates",
  ],
  data() {
    return {
      isSmall: false,
    };
  },
  setup() {
    let miniChart = `miniChart${Math.floor(Math.random() * 1000)}`;
    let chartId = `chart${Math.floor(Math.random() * 1000)}`;
    return {
      miniChart,
      chartId,
    };
  },

  mounted() {
    this.createMiniChart();
    window.addEventListener("resize", this.onResize);
    let values = [];
    for (let i in this.dates) {
      values.push({
        category: this.dates[i],
        value: this.formatPrice(this.prices[i]),
      });
    }
    let chart = am4core.create(this.chartId, am4charts.XYChart);
    chart.colors.list = this.raising
      ? [am4core.color("#00FFD1")]
      : [am4core.color("#FD6B63")];
    chart.data = values;
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.labels.template.fill = am4core.color("#A3A0B8");
    categoryAxis.renderer.labels.template.fontFamily = "dana";
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.paddingLeft = 20;
    valueAxis.renderer.labels.template.textAlign = "middle";
    valueAxis.renderer.labels.template.fill = am4core.color("#A3A0B8");
    var series = chart.series.push(new am4charts.LineSeries());

    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "category";
    series.tooltipText = "ew";
    series.fillOpacity = 1;
    series.strokeWidth = 5;
    series.smoothing = "monotoneX";
    let tooltipHTML = `<div style="display:flex;flex-direction:column"><span>{valueY}<img src="${image}"></span><span>{categoryX}</span></div>`;
    series.tooltip.getFillFromObject = false;
    series.tooltip.height = 55;
    series.tooltip.background.strokeWidth = 0;
    series.tooltip.background.borderrad = 0;
    series.tooltip.background.cornerRadius = 10;
    series.tooltip.background.fill = am4core.color("#15122A");
    series.tooltipHTML = tooltipHTML;
    var bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.stroke = am4core.color("#fff");
    bullet.circle.strokeWidth = 2;
    bullet.fillOpacity = 0;
    bullet.strokeOpacity = 0;

    var bulletState = bullet.states.create("hover");
    bulletState.properties.fillOpacity = 1;
    bulletState.properties.strokeOpacity = 1;

    let fillModifier = new am4core.LinearGradientModifier();
    fillModifier.opacities = [0.15, 0];
    fillModifier.offsets = [0, 1];
    fillModifier.gradient.rotation = 90;
    series.segments.template.fillModifier = fillModifier;
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 0;
    chart.cursor.behavior = "none";
    this.onResize();
  },
  methods: {
    formatPrice,
    onResize() {
      let myMini = this.$refs.miniDiv.scrollHeight;
      this.$refs.myBig.style.height = `${myMini}px`;
      let sWidth = window.innerWidth;
      if (sWidth < 992) {
        this.isSmall = true;
      } else {
        this.isSmall = false;
      }
    },
    createMiniChart() {
      var ctx = document.getElementById(this.miniChart).getContext("2d"),
        gradient;

      if (!this.raising) {
        gradient = ctx.createLinearGradient(0, 0, 0, 100);
        gradient.addColorStop(0, "rgba(253, 107, 99, 0.15)");
        gradient.addColorStop(0.5, "rgba(253, 107, 99, 0)");
        gradient.addColorStop(1, "rgba(253, 107, 99, 0)");
      } else {
        gradient = ctx.createLinearGradient(0, 0, 0, 100);

        gradient = ctx.createLinearGradient(0, 0, 0, 100);
        gradient.addColorStop(0, "rgba(0, 255, 209, 0.15)");
        gradient.addColorStop(0.5, "rgba(0, 255, 209, 0)");
        gradient.addColorStop(1, "rgba(0, 255, 209, 0)");
      }

      new Chart(this.miniChart, {
        type: "line",
        data: {
          labels: this.dates,
          datasets: [
            {
              fill: true,
              borderColor: this.raising ? "#00FFD1" : "#FD6B63",
              backgroundColor: gradient,
              borderWidth: 2,
              data: this.prices,
              cubicInterpolationMode: "monotone",
            },
          ],
        },
        options: {
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
                display: false,
                borderColor: "transparent",
              },
              grid: {
                display: false,
                borderColor: "transparent",
              },
            },
            y: {
              ticks: {
                display: false,
              },
              grid: {
                display: false,
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
    },
  },
};
</script>

<style scoped>
.chart-tooltip {
  display: none;
  flex-direction: column;
}
</style>
