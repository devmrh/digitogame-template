<template>
  <section class="home-intro inview">
    <div class="home-intro__wrapper">
      <swiper
        @swiper="setSwiper"
        @slideChange="onSlideChange"
        :spaceBetween="30"
        :slidesPerView="1"
        :loop="true"
        :pagination="{ clickable: true }"
      >
        <swiper-slide v-for="(slide, index) in slider" :key="index">
          <home-intro-slide
            @mouseover="isMouseHover = true"
            @mouseleave="isMouseHover = false"
            @timerComplete="swiper.slideNext()"
            :text="slide.text"
            :imageurl="slide.imageurl"
            :see_route="slide.see_route"
            :buy_route="slide.buy_route"
            :height="height"
          ></home-intro-slide>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import image from "../../assets/img/home-intro.png";
import HomeIntroSlide from "./home-intro-slide.vue";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

SwiperCore.use([Pagination]);
export default {
  mounted() {
    let mvue = this;
    setInterval(function () {
      if (!mvue.isMouseHover) {
        mvue.height += 100 / 280;
      }
    }, 10);
  },

  components: {
    Swiper,
    SwiperSlide,
    HomeIntroSlide,
  },
  methods: {
    setSwiper(swiper) {
      this.swiper = swiper;
    },
    onSlideChange() {
      this.height = 0;
    },
  },
  data() {
    return {
      swiper: undefined,
      isMouseHover: false,
      height: 0,
      slider: [
        {
          text:
            "همین الان بازی نیو ورلد را از دیجیتو گیم بخرید فروش ویژه نیو ورلد در دیجیتو گیم",
          buy_route: "#",
          see_route: "#",
          imageurl: image,
        },
        {
          text: "2",
          buy_route: "#",
          see_route: "#",
          imageurl: image,
        },
        {
          text: "3",
          buy_route: "#",
          see_route: "#",
          imageurl: image,
        },
      ],
    };
  },
};
</script>
