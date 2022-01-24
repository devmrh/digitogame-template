<template>
  <footer class="main-footer">
    <div class="container">
      <div class="main-footer__wrapper">
        <div class="main-footer__wrapper__content">
          <div class="row">
            <div class="col-lg-3 order-lg-2 col-sm-6">
              <div class="main-footer__wrapper__content__item">
                <div class="main-footer__wrapper__content__item__title">
                  <h3>راهنمای مشتریان</h3>
                </div>
                <div class="main-footer__wrapper__content__item__list">
                  <ul>
                    <li><a href="#">چرا باید به دیجیتو گیم اعتماد کنیم؟</a></li>
                    <li><a href="#">راهنمای خرید از ووجی شاپ</a></li>
                    <li><a href="#">راهنمای فروش به ووجی شاپ</a></li>
                    <li><a href="#">نحوه پرداخت</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 order-lg-3 col-sm-6">
              <div class="main-footer__wrapper__content__item">
                <div class="main-footer__wrapper__content__item__title">
                  <h3>خدمات مشتریان</h3>
                </div>
                <div class="main-footer__wrapper__content__item__list">
                  <ul>
                    <li><a href="#">پرسش های متداول</a></li>
                    <li><a href="#">حریم خصوصی</a></li>
                    <li><router-link to="contact-us">تماس با ما</router-link></li>

                    <li><a href="#">شکایات</a></li>
                    <li><a href="#">قوانین</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 order-lg-1 col-md-6">
              <div class="main-footer__wrapper__content__item">
                <div class="main-footer__wrapper__content__item__title">
                  <h3>درباره دیجیتو گیم</h3>
                </div>
                <div class="main-footer__wrapper__content__item__desc">
                  <p>
                    قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر
                    گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه
                    رعایت حق تکثیر متون را ندارند و در همان حال کا نویسنده متن نیستند و
                    وظیفه رعایت حق تکثیر متن نیستند و
                  </p>
                </div>
                <div class="main-footer__wrapper__content__item__socials">
                  <ul>
                    <li>
                      <a href="#" class="instagram"
                        ><i class="dn-instagram"
                          ><span class="path1"></span><span class="path2"></span
                          ><span class="path3"></span></i
                        >اینستاگرام</a
                      >
                    </li>
                    <li>
                      <a href="#" class="telegram"
                        ><i class="dn-telegram"
                          ><span class="path1"></span><span class="path2"></span
                          ><span class="path3"></span></i
                        >تلگرام</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
                      <footer-slide :alt="item.alt" :image="item.image"></footer-slide>
                    </swiper-slide>
                  </swiper>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main-footer__wrapper__copyright">
          <div class="main-footer__wrapper__copyright__text">
            <i class="dn-copyright"></i>
            <p>
              تمامی حقوق برای وبسایت ووجی شاپ محفوظ است و کپی به هرشکل پیگرد قانونی دارد.
            </p>
          </div>
          <div class="main-footer__wrapper__copyright__back-up">
            <a href="#" @click="scrollToTop"
              ><i class="dn-arrow-up"
                ><span class="path1"></span><span class="path2"></span
                ><span class="path3"></span></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import SwiperCore, { Navigation, Autoplay } from "swiper";
import FooterSlide from "./footer-slide.vue";
import image from "../../assets/img/nemad.png";

SwiperCore.use([Navigation, Autoplay]);

export default {
  components: { Swiper, SwiperSlide, FooterSlide },
  methods: {
    scrollToTop: function (e) {
      e.preventDefault();
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  data() {
    return {
      items: [
        { alt: "", image: image },
        { alt: "", image: image },
        { alt: "", image: image },
      ],
    };
  },
};
</script>
