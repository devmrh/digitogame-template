<template>
  <section class="home-intro inview">
    <div class="home-intro__wrapper">
      <swiper
        :spaceBetween="30"
        :slidesPerView="1"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }"
      >
        <swiper-slide v-for="(slide, index) in slider" :key="index">
          <home-intro-slide
            :text="slide.text"
            :imageurl="slide.imageurl"
            :see_route="slide.see_route"
            :buy_route="slide.buy_route"
          ></home-intro-slide>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import image from "../../assets/img/home-intro.png";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import HomeIntroSlide from "./home-intro-slide.vue";
SwiperCore.use([Pagination, Autoplay]);
export default {
  components: {
    Swiper,
    SwiperSlide,
    HomeIntroSlide,
  },

  data() {
    return {
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
