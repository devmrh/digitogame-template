<template>
  <section class="game inview">
    <div class="game__wrapper">
      <div class="sec-title">
        <div class="sec-title__caption">
          <p>پرفروش ترین های<span> دیجیتو گیم</span></p>
          <span>مشاهده آرشیو</span>
        </div>
      </div>
      <div class="game__wrapper__slider">
        <swiper
          :spaceBetween="20"
          :slidesPerView="1.2"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
          :breakpoints="{
            1200: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 1.5,
            },
          }"
        >
          <swiper-slide v-for="(item, i) in items" :key="i">
            <bestselling-game-slide
              :product="item.product"
              :image="item.image"
              :name="item.name"
              :price="item.price"
              :url="item.url"
            ></bestselling-game-slide>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import image1 from "../../assets/img/game1.png";
import image2 from "../../assets/img/game2.png";
import image3 from "../../assets/img/game3.png";
import image4 from "../../assets/img/game4.png";
import bestsellingGameSlide from "./bestselling-game-slide.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import SwiperCore, { Pagination, Autoplay } from "swiper";
SwiperCore.use([Pagination, Autoplay]);

export default {
  components: { bestsellingGameSlide, Swiper, SwiperSlide },
  name: "bestselling-game",
  data() {
    return {
      items: [
        {
          product: "سی دی کی",
          price: 610000,
          name: "فیفا 22",
          url: "#",
          image: image1,
        },
        {
          product: "سی دی کی",
          price: 540000,
          name: "نیووارد World New",
          url: "#",
          image: image2,
        },
        {
          product: "سی دی کی",
          price: 540000,
          name: "فوتبال منیجر 2022",
          url: "#",
          image: image3,
        },
        {
          product: "سی دی کی",
          price: 540000,
          name: "گیم تایم 60 روزه برای وارگرفت",
          url: "#",
          image: image4,
        },
        {
          product: "سی دی کی",
          price: 610000,
          name: "فیفا 22",
          url: "#",
          image: image1,
        },
        {
          product: "سی دی کی",
          price: 540000,
          name: "نیووارد World New",
          url: "#",
          image: image2,
        },
        {
          product: "سی دی کی",
          price: 540000,
          name: "فوتبال منیجر 2022",
          url: "#",
          image: image3,
        },
        {
          product: "سی دی کی",
          price: 540000,
          name: "گیم تایم 60 روزه برای وارگرفت",
          url: "#",
          image: image4,
        },
      ],
    };
  },
};
</script>
