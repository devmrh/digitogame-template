<template>
  <div class="single-product-sidebar__wrapper__title">
    <div class="title-icon">
      <i class="dn-smille" data-bg-color="#A16AEF" data-box-shadow="#a16aef26"></i>
      <h3>محصولات مشابه</h3>
    </div>
    <div class="single-product-sidebar__wrapper__title__more"></div>
  </div>
  <swiper
    @swiper="setSwiper"
    @slideChange="onSlideChange"
    :loop="true"
    :pagination="{ clickable: true, el: '.single-product-sidebar__wrapper__title__more' }"
  >
    <swiper-slide v-for="(item, i) in items" :key="i">
      <single-product-sidebar-similar-slide
        @mouseover="isMouseHover = true"
        @mouseleave="isMouseHover = false"
        @timerComplete="swiper.slideNext()"
        :width="width"
        :alt="item.alt"
        :coName="item.coName"
        :image="item.image"
        :name="item.name"
        :price="item.price"
        :url="item.url"
      ></single-product-sidebar-similar-slide>
    </swiper-slide>
  </swiper>
</template>
<script>
import SingleProductSidebarSimilarSlide from "./SingleProductSidebarSimilarSlide.vue";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

SwiperCore.use([Pagination]);
export default {
  name: "SingleProductSidebarSimilar",
  components: {
    SingleProductSidebarSimilarSlide,
    Swiper,
    SwiperSlide,
  },
  mounted() {
    let mvue = this;
    setInterval(function () {
      if (!mvue.isMouseHover) {
        mvue.width += 100 / 280;
      }
    }, 10);
  },
  methods: {
    setSwiper(swiper) {
      this.swiper = swiper;
    },
    onSlideChange() {
      this.width = 0;
    },
  },
  data() {
    return {
      swiper: undefined,
      isMouseHover: false,
      width: 0,
    };
  },
  props: ["items"],
};
</script>
<style scoped>
.swiper-pagination-bullet-active {
  color: red;
}
.swiper-pagination-bullet {
  color: white;
}
</style>
