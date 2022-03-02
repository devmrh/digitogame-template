<template>
  <section class="">
    <div class="container">
      <div class="roow">
        <div class="cool-toolbar"><toolbar></toolbar></div>
        <div class="cool-content">
          <my-header></my-header>
          <token-show-header code="021" number="21212121"></token-show-header>
          <section class="token">
            <div class="token__wrapper">
              <token-show-chart
                v-for="(item, i) in tokens"
                :key="i"
                :change="item.change"
                :date="item.date"
                :name="item.name"
                :price="item.price"
                :flag="item.flag"
                :flagAlt="item.flagAlt"
                :raising="item.raising"
                :dates="item.dates"
                :prices="item.prices"
              ></token-show-chart>
            </div>
          </section>
          <token-show-prices :items="prices"></token-show-prices>
        </div>
      </div>
    </div>
  </section>
  <application></application>
  <my-footer></my-footer>
</template>
<script>
import europeFlag from "../assets/img/FM.png";
import AmericaFlag from "../assets/img/US.png";
import Application from "../components/Home/application.vue";
import MyHeader from "../components/Header/MyHeader.vue";
import MyFooter from "../components/Footer/MyFooter.vue";
import toolbar from "../components/Toolbar/toolbar.vue";
import TokenShowHeader from "../components/TokenShow/TokenShowHeader.vue";
import TokenShowChart from "../components/TokenShow/TokenShowChart.vue";
import TokenShowPrices from "../components/TokenShow/TokenShowPrices.vue";
import usFlag from "../assets/img/US.png";
import irFlag from "../assets/img/IR.png";
export default {
  name: "TokenShow",
  components: {
    toolbar,
    MyHeader,
    MyFooter,
    Application,
    TokenShowHeader,
    TokenShowChart,
    TokenShowPrices,
  },
  data() {
    return {
      tokens: [
        {
          change: "2115",
          price: "۳۹۸۰۶۰",
          name: "توکن اروپا",
          date: "12:20 ق.ظ",
          flagAlt: "",
          flag: europeFlag,
          raising: true,
          dates: ["4 آذر", "5 آذر", "6 آذر", "7 آذر", "8 آذر"],
          prices: [320000, 270000, 350000, 280000, 400000],
        },
        {
          change: "۱۳۱۵",
          price: "۳۱۳۰۶۰",
          name: "توکن آمریکا",
          date: "30 ثانیه پیش",
          flagAlt: "",
          flag: AmericaFlag,
          raising: false,
          dates: ["4 آذر", "5 آذر", "6 آذر", "7 آذر", "8 آذر"],
          prices: [400000, 300000, 350000, 300000, 270000],
        },
      ],
      prices: [
        {
          time: "24 ساعت",
          price: "3000",
          high: true,
          image: usFlag,
          alt: "",
        },
        {
          time: "2 ماه",
          price: "3700",
          high: false,
          image: irFlag,
          alt: "",
        },
        {
          time: "24 ساعت",
          price: "3000",
          high: true,
          image: usFlag,
          alt: "",
        },
        {
          time: "2 ماه",
          price: "3700",
          high: false,
          image: irFlag,
          alt: "",
        },
      ],
    };
  },
};
</script>
