<template>
  <section class="gallery-product">
    <div class="gallery-product__wrapper">
      <div class="title-icon">
        <i class="dn-smille" data-bg-color="#00cd9f" data-box-shadow="#00ff8526"></i>
        <h3>گالری تصاویر</h3>
      </div>
      <div class="gallery-product__wrapper__slider">
        <div class="gallery-product__wrapper__slider__list">
          <swiper
            class="inview"
            @swiper="setThumbSwiper"
            :spaceBetween="20"
            :slidesPerView="2.3"
            :freeMode="true"
            :breakpoints="{
              992: {
                slidesPerView: 7.3,
              },

              768: {
                slidesPerView: 5.3,
              },
              480: {
                slidesPerView: 4.3,
              },
              360: {
                slidesPerView: 3.3,
              },
            }"
          >
            <swiper-slide
              v-for="(item, i) in gallery"
              :key="i"
              @click="onThumbClicked(i)"
            >
              <single-product-gallery-thumb-slide
                :image="item.thumb"
                :alt="item.alt"
                :id="i"
                :isActive="activeId == i"
              ></single-product-gallery-thumb-slide>
            </swiper-slide>
          </swiper>
        </div>
        <div class="gallery-product__wrapper__slider__show">
          <swiper
            class="inview"
            @swiper="setSwiper"
            @slideChange="onSlideChanged"
            :slidesPerView="1"
            :spaceBetween="30"
            :navigation="{
              nextEl: '.swiper-btn-next',
              prevEl: '.swiper-btn-prev',
            }"
            :modules="modules"
          >
            <swiper-slide v-for="(item, i) in gallery" :key="i">
              <single-product-gallery-slide
                :alt="item.alt"
                :image="item.image"
              ></single-product-gallery-slide>
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
  </section>
</template>
<script>
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import SingleProductGalleryThumbSlide from "./SingleProductGalleryThumbSlide.vue";
import SingleProductGallerySlide from "./SingleProductGallerySlide.vue";

export default {
  name: "SingleProductGallery",
  setup() {
    return { modules: [Navigation] };
  },

  methods: {
    setThumbSwiper(swiper) {
      this.thumbSwiper = swiper;
    },
    setSwiper(swiper) {
      this.swiper = swiper;
    },
    onThumbClicked(id) {
      this.swiper.slideTo(id, 300, () => {});
    },
    onSlideChanged() {
      this.thumbSwiper.slideTo(this.swiper.activeIndex, 300, () => {});
      this.activeId = this.swiper.activeIndex;
    },
  },
  data() {
    return {
      activeId: 0,
      thumbSwiper: undefined,
      swiper: undefined,
    };
  },

  components: {
    Swiper,
    SwiperSlide,
    SingleProductGalleryThumbSlide,
    SingleProductGallerySlide,
  },
  props: ["gallery"],
};
</script>
