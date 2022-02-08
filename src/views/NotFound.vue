<template>
  <section class="">
    <div class="container">
      <div class="roow">
        <div class="cool-toolbar"><toolbar></toolbar></div>
        <div class="cool-content">
          <my-header class="inview"></my-header>
          <section class="error">
            <div class="error__head">
              <div class="error__head__right">
                <div class="error__head__right__icon">
                  <img src="@/assets/svg/sad-emoji-outline.svg" alt="sadEmoji" />
                </div>
                <div class="error__head__right__text">
                  <span>متاسفانه این صفحه بنا به دلایلی در دسترس نمی باشد ! </span>
                </div>
              </div>
              <router-link to="/">
                <div class="error__head__left">
                  <div class="error__head__left__text">
                    <span>برو به صفحه اصلی</span>
                    <img src="@/assets/svg/left-arrow.svg" alt="sadEmoji" />
                  </div>
                </div>
              </router-link>
            </div>
            <div class="error__content">
              <div class="error__content__background">
                <img src="@/assets/img/Mask-Group.png" alt="" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
  <application></application>
  <my-footer></my-footer>
</template>
<script>
import Application from "../components/Home/application.vue";
import MyHeader from "../components/Header/my-header.vue";
import MyFooter from "../components/Footer/MyFooter.vue";
import toolbar from "../components/Toolbar/toolbar.vue";
import InnerContact from "../components/ContactUs/innerContact.vue";
export default {
  name: "NotFound",

  components: { toolbar, MyHeader, MyFooter, Application, InnerContact },
};
</script>
