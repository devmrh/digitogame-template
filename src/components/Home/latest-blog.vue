<template>
  <section class="blog blog--mb0 inview">
    <div class="blog__wrapper">
      <router-link to="blogs">
        <div class="sec-title sec-title--yellow">
          <div class="sec-title__caption">
            <p>آخرین مطالب<span> دیجیتو مگ</span></p>
            <span>مشاهده آرشیو</span>
          </div>
        </div>
      </router-link>

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
            <latest-blog-slide
              :avatar="item.avatar"
              :day="item.day"
              :image="item.image"
              :month="item.month"
              :name="item.name"
              :number="item.number"
              :url="item.url"
              :writer="item.writer"
              :writerUrl="item.writerUrl"
              :text="item.text"
            ></latest-blog-slide>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import avatar1 from "../../assets/img/avatar1.png";
import avatar2 from "../../assets/img/avatar2.png";
import avatar3 from "../../assets/img/avatar3.png";
import avatar4 from "../../assets/img/avatar4.png";
import image1 from "../../assets/img/daily-offer1.png";
import LatestBlogSlide from "./latest-blog-slide.vue";
import SwiperCore, { Pagination, Autoplay } from "swiper";
SwiperCore.use([Pagination, Autoplay]);
export default {
  components: { Swiper, SwiperSlide, LatestBlogSlide },
  data() {
    return {
      items: [
        {
          name: "مشخصات سیستم بازی فارکرای۶ منتشر شد",
          avatar: avatar1,
          day: "25",
          month: "آبان",
          image: image1,
          writer: "محمد پادیاب",
          number: "5",
          url: "#",
          writerUrl: "#",
          text:
            "salam hi salam hi salam hi salam hi salam hi salam hi salam hi salam hi salam hi ",
        },
        {
          name: "آموزش دانلود و نصب بازی بتلفیلد ۲۴۰۲",
          avatar: avatar2,
          day: "25",
          month: "آبان",
          image: image1,
          writer: "محمد پادیاب",
          number: "5",
          url: "#",
          writerUrl: "#",
          text:
            "salam hi salam hi salam hi salam hi salam hi salam hi salam hi salam hi salam hi ",
        },
        {
          name: "هر آنچه که باید درباره بازی نگهبانان کهک ...",
          avatar: avatar3,
          day: "25",
          month: "آبان",
          image: image1,
          writer: "محمد پادیاب",
          number: "5",
          url: "#",
          writerUrl: "#",
          text:
            "salam hi salam hi salam hi salam hi salam hi salam hi salam hi salam hi salam hi ",
        },
        {
          name: "آموزش ویدیویی و کامل بازی فورتزا هورایزن",
          avatar: avatar4,
          day: "25",
          month: "آبان",
          image: image1,
          writer: "محمد پادیاب",
          number: "5",
          url: "#",
          writerUrl: "#",
          text:
            "salam hi salam hi salam hi salam hi salam hi salam hi salam hi salam hi salam hi ",
        },
        {
          name: "مشخصات سیستم بازی فارکرای۶ منتشر شد",
          avatar: avatar1,
          day: "25",
          month: "آبان",
          image: image1,
          writer: "محمد پادیاب",
          number: "5",
          url: "#",
          writerUrl: "#",
          text:
            "salam hi salam hi salam hi salam hi salam hi salam hi salam hi salam hi salam hi ",
        },
        {
          name: "آموزش دانلود و نصب بازی بتلفیلد ۲۴۰۲",
          avatar: avatar2,
          day: "25",
          month: "آبان",
          image: image1,
          writer: "محمد پادیاب",
          number: "5",
          url: "#",
          writerUrl: "#",
          text:
            "salam hi salam hi salam hi salam hi salam hi salam hi salam hi salam hi salam hi ",
        },
        {
          name: "هر آنچه که باید درباره بازی نگهبانان کهک ...",
          avatar: avatar3,
          day: "25",
          month: "آبان",
          image: image1,
          writer: "محمد پادیاب",
          number: "5",
          url: "#",
          writerUrl: "#",
          text:
            "salam hi salam hi salam hi salam hi salam hi salam hi salam hi salam hi salam hi ",
        },
        {
          name: "آموزش ویدیویی و کامل بازی فورتزا هورایزن",
          avatar: avatar4,
          day: "25",
          month: "آبان",
          image: image1,
          writer: "محمد پادیاب",
          number: "5",
          url: "#",
          writerUrl: "#",
          text:
            "salam hi salam hi salam hi salam hi salam hi salam hi salam hi salam hi salam hi ",
        },
      ],
    };
  },
};
</script>
