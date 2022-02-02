<template>
  <div class="col-lg-3 order-lg-4 col-md-6">
    <div class="main-footer__wrapper__content__item">
      <div class="main-footer__wrapper__content__item__title">
        <h3>نماد های اعتماد</h3>
      </div>
      <div class="main-footer__wrapper__content__item__nemad">
        <swiper
          class="swiper-container"
          :spaceBetween="30"
          :slidesPerView="1"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
          :navigation="{
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev',
          }"
        >
          <swiper-slide v-for="(item, i) in items" :key="i">
            <my-footer-enamad-slide
              :alt="item.alt"
              :image="item.image"
            ></my-footer-enamad-slide>
          </swiper-slide>
          <div class="swiper-btn-next">
            <i class="dn-arrow-left"
              ><span class="path1"></span><span class="path2"></span
            ></i>
          </div>
          <div class="swiper-btn-prev">
            <i class="dn-arrow-right"
              ><span class="path1"></span><span class="path2"></span
            ></i>
          </div>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import MyFooterEnamadSlide from "./MyFooterEnamadSlide.vue";
SwiperCore.use([Navigation, Autoplay]);

export default {
  name: "MyFooterEnamad",
  props: ["items"],
  components: {
    MyFooterEnamadSlide,
    Swiper,
    SwiperSlide,
  },
};
</script>
