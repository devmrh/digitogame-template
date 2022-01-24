<template>
  <section class="toolbar-content" id="toolbar-content">
    <div class="toolbar-content__wrapper">
      <div class="toolbar-content__wrapper__slider">
        <swiper @swiper="onSwiper" :spaceBetween="0" :slidesPerView="'auto'">
          <swiper-slide v-for="(item, i) in items" :key="i">
            <toolbar-content-slide
              @click="onActiveSub(item.id)"
              :isActive="getActiveSub(item.id)"
              v-if="!item.isSub"
              :icon="item.icon"
              :name="item.name"
              :number="item.number"
              :url="item.url"
              :items="item.items"
            >
            </toolbar-content-slide>
            <toolbar-content-sub-slide
              v-if="item.isSub"
              :active="getActiveSub(item.id)"
              :key="i"
              :alt="item.alt"
              :image="item.image"
              :url="item.url"
            ></toolbar-content-sub-slide>
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
      this.swiper = swiper;
      this.$emit("swiper", swiper);
    },
    onActiveSub: function (id) {
      if (this.activeSub == id) {
        this.activeSub = undefined;
      } else {
        this.activeSub = id;
      }

      setTimeout(() => {
        this.swiper.update();
      }, 301);
    },
    getActiveSub: function (id) {
      return this.activeSub == id;
    },
  },

  data() {
    return {
      swiper: undefined,
      activeSub: undefined,
      items: [
        {
          id: 1,
          name: "ایکس باکس",
          icon: "dn-xbox",
          number: 130,
          isSub: false,
          url: "#",
        },
        {
          id: 1,
          isSub: true,
          image: image,
          url: "#",
          alt: "",
        },
        {
          id: 1,
          isSub: true,
          image: image2,
          url: "#",
          alt: "",
        },
        {
          id: 1,
          isSub: true,
          image: image3,
          url: "#",
          alt: "",
        },
        {
          id: 1,
          isSub: true,
          image: image4,
          url: "#",
          alt: "",
        },
        {
          id: 1,
          isSub: true,
          image: image5,
          url: "#",
          alt: "",
        },
        {
          id: 2,
          name: "پلی استیشن",
          icon: "dn-play-station",
          number: 85,
          isSub: false,
          url: "#",
        },
        {
          id: 3,
          name: "استیم",
          icon: "dn-stim",
          number: 110,
          isSub: false,
          url: "#",
        },
        {
          id: 4,
          name: "استیم",
          icon: "dn-stim",
          number: 130,
          isSub: false,
          url: "#",
        },
        {
          id: 4,
          isSub: true,
          image: image,
          url: "#",
          alt: "",
        },
        {
          id: 4,
          isSub: true,
          image: image2,
          url: "#",
          alt: "",
        },
        {
          id: 4,
          isSub: true,
          image: image3,
          url: "#",
          alt: "",
        },
      ],
    };
  },
};
</script>
