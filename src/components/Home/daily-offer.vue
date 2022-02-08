<template>
  <section class="blog inview">
    <div class="blog__wrapper">
      <div class="sec-title">
        <router-link to="cat-product">
          <div class="sec-title__caption">
            <p>پیشنهاد روزانه<span> دیجیتو گیم</span></p>
            <span>مشاهده آرشیو</span>
          </div>
        </router-link>

        <daily-offer-timer seconds="172800"></daily-offer-timer>
      </div>
      <div class="blog__wrapper__slider">
        <swiper
          :spaceBetween="20"
          :slidesPerView="1.2"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
          :breakpoints="{
            '1200': {
              slidesPerView: 4,
            },
            '992': {
              slidesPerView: 3,
            },
            '576': {
              slidesPerView: 2,
            },
            '480': {
              slidesPerView: 1.5,
            },
          }"
        >
          <swiper-slide v-for="(item, i) in items" :key="i">
            <daily-offer-slide
              :image="item.image"
              :name="item.name"
              :off="item.off"
              :price="item.price"
              :url="item.url"
            ></daily-offer-slide>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import DailyOfferSlide from "./daily-offer-slide.vue";
import image1 from "../../assets/img/daily-offer1.png";
import image2 from "../../assets/img/daily-offer2.png";
import DailyOfferTimer from "../CountdownTimer.vue";
import SwiperCore, { Pagination, Autoplay } from "swiper";
SwiperCore.use([Pagination, Autoplay]);
export default {
  name: "daily-offer",
  components: {
    Swiper,
    SwiperSlide,
    DailyOfferSlide,
    DailyOfferTimer,
  },

  data() {
    return {
      items: [
        {
          off: 55,
          price: 2050000,
          name: "Pass Portal Dark :Classic Crusade Burning",
          url: "#",
          image: image1,
        },
        {
          off: 55,
          price: 610000,
          name: "گیم تایم 60 روزه برای وارکرفت",
          url: "#",
          image: image2,
        },
        {
          off: 55,
          price: 2050000,
          name: "Pass Portal Dark :Classic Crusade Burning",
          url: "#",
          image: image1,
        },
        {
          off: 55,
          price: 610000,
          name: "گیم تایم 60 روزه برای وارکرفت",
          url: "#",
          image: image2,
        },
        {
          off: 55,
          price: 2050000,
          name: "Pass Portal Dark :Classic Crusade Burning",
          url: "#",
          image: image1,
        },
        {
          off: 55,
          price: 610000,
          name: "گیم تایم 60 روزه برای وارکرفت",
          url: "#",
          image: image2,
        },
        {
          off: 55,
          price: 2050000,
          name: "Pass Portal Dark :Classic Crusade Burning",
          url: "#",
          image: image1,
        },
        {
          off: 55,
          price: 610000,
          name: "گیم تایم 60 روزه برای وارکرفت",
          url: "#",
          image: image2,
        },
      ],
    };
  },
};
</script>
