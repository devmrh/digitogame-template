<template>
  <section class="game inview">
    <div class="game__wrapper">
      <div class="sec-title">
        <div class="sec-title__caption">
          <p>کوپن و آیتم های بازیِ<span> دیجیتو گیم</span></p>
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
import image1 from "../../assets/img/game9.png";
import image2 from "../../assets/img/game10.png";
import image3 from "../../assets/img/game11.png";
import image4 from "../../assets/img/game12.png";
import bestsellingGameSlide from "./bestselling-game-slide.vue";
import SwiperCore, { Pagination, Autoplay } from "swiper";
SwiperCore.use([Pagination, Autoplay]);
export default {
  components: { bestsellingGameSlide, Swiper, SwiperSlide },
  name: "bestselling-game",
  data() {
    return {
      items: [
        {
          product: "کوپن و آیتم",
          price: 610000,
          name: "تقویت اسکین های نیو ورلد",
          url: "#",
          image: image1,
        },
        {
          product: "کوپن و آیتم",
          price: 540000,
          name: "ارتقا لول از ۱ تا ۰۶",
          url: "#",
          image: image2,
        },
        {
          product: "کوپن و آیتم",
          price: 540000,
          name: "پاسگاه های نظامی",
          url: "#",
          image: image3,
        },
        {
          product: "کوپن و آیتم",
          price: 540000,
          name: "سلاح های ویژه",
          url: "#",
          image: image4,
        },
        {
          product: "کوپن و آیتم",
          price: 610000,
          name: "تقویت اسکین های نیو ورلد",
          url: "#",
          image: image1,
        },
        {
          product: "کوپن و آیتم",
          price: 540000,
          name: "ارتقا لول از ۱ تا ۰۶",
          url: "#",
          image: image2,
        },
        {
          product: "کوپن و آیتم",
          price: 540000,
          name: "پاسگاه های نظامی",
          url: "#",
          image: image3,
        },
        {
          product: "کوپن و آیتم",
          price: 540000,
          name: "سلاح های ویژه",
          url: "#",
          image: image4,
        },
      ],
    };
  },
};
</script>
