<template>
  <section class="toolbar-content" id="toolbar-content">
    <div class="toolbar-content__wrapper">
      <div class="toolbar-content__wrapper__slider">
        <swiper @swiper="onSwiper" :spaceBetween="0" :slidesPerView="'auto'">
          <swiper-slide v-for="(item, i) in items" :key="i">
            <toolbar-content-slide
              @reloadSwiper="reloadSwiper"
              v-if="!item.isSub"
              :icon="item.icon"
              :name="item.name"
              :number="item.number"
              :url="item.url"
              :items="item.items"
            >
            </toolbar-content-slide>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import ToolbarContentSlide from "./toolbar-content-slide.vue";
import ToolbarContentSubSlide from "./toolbar-content-sub-slide.vue";

import image from "../../assets/img/toolbar1.png";
import image2 from "../../assets/img/toolbar2.png";
import image3 from "../../assets/img/toolbar3.png";
import image4 from "../../assets/img/toolbar4.png";
import image5 from "../../assets/img/toolbar5.png";

export default {
  components: { Swiper, SwiperSlide, ToolbarContentSlide, ToolbarContentSubSlide },

  methods: {
    onSwiper: function (swiper) {
      this.$emit("swiper", swiper);
    },
  },

  data() {
    return {
      swiper: undefined,
      items: [
        {
          name: "ایکس باکس",
          icon: "dn-xbox",
          number: 130,
          isSub: false,
          url: "#",
          items: [
            {
              image: image,
              url: "#",
              alt: "",
            },
            {
              image: image2,
              url: "#",
              alt: "",
            },
            {
              image: image3,
              url: "#",
              alt: "",
            },
            {
              image: image4,
              url: "#",
              alt: "",
            },
            {
              image: image5,
              url: "#",
              alt: "",
            },
          ],
        },

        {
          name: "پلی استیشن",
          icon: "dn-play-station",
          number: 85,
          isSub: false,
          url: "#",
        },
        {
          name: "استیم",
          icon: "dn-stim",
          number: 110,
          isSub: false,
          url: "#",
        },
        {
          name: "استیم",
          icon: "dn-stim",
          number: 130,
          isSub: false,
          url: "#",
        },
      ],
    };
  },
};
</script>
