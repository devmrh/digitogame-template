<template>
  <section class="game inview">
    <div class="game__wrapper">
      <div class="sec-title">
        <div class="sec-title__caption">
          <p>گیفت کارت های<span> دیجیتو گیم</span></p>
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
import { Swiper, SwiperSlide } from "swiper/vue";
import image1 from "../../assets/img/gift1.png";
import image2 from "../../assets/img/gift2.png";
import image3 from "../../assets/img/gift3.png";
import image4 from "../../assets/img/gift4.png";
import bestsellingGameSlide from "./bestselling-game-slide.vue";
import SwiperCore, { Pagination, Autoplay } from "swiper";
SwiperCore.use([Pagination, Autoplay]);
export default {
  components: { bestsellingGameSlide, Swiper, SwiperSlide },
  data() {
    return {
      items: [
        {
          product: "گیفت کارت",
          price: 610000,
          name: "گیفت کارت ۵ دلاری اپل - آمریکا",
          url: "#",
          image: image1,
        },
        {
          product: "گیفت کارت",
          price: 540000,
          name: "گیفت کارت ۰۲ دلاری پلی استیشن - آمریکا",
          url: "#",
          image: image2,
        },
        {
          product: "گیفت کارت",
          price: 540000,
          name: "گیفت کارت استیم والت ۵ دلاری",
          url: "#",
          image: image3,
        },
        {
          product: "گیفت کارت",
          price: 540000,
          name: "گیفت کارت ریزر گلد ۵ دلاری - آمریکا",
          url: "#",
          image: image4,
        },
        {
          product: "گیفت کارت",
          price: 610000,
          name: "گیفت کارت ۵ دلاری اپل - آمریکا",
          url: "#",
          image: image1,
        },
        {
          product: "گیفت کارت",
          price: 540000,
          name: "گیفت کارت ۰۲ دلاری پلی استیشن - آمریکا",
          url: "#",
          image: image2,
        },
        {
          product: "گیفت کارت",
          price: 540000,
          name: "گیفت کارت استیم والت ۵ دلاری",
          url: "#",
          image: image3,
        },
        {
          product: "گیفت کارت",
          price: 540000,
          name: "گیفت کارت ریزر گلد ۵ دلاری - آمریکا",
          url: "#",
          image: image4,
        },
      ],
    };
  },
};
</script>
