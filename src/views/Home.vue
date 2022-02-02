<template>
  <section class="index-content">
    <div class="container">
      <div class="roow">
        <div class="cool-toolbar">
          <toolbar></toolbar>
        </div>
        <div class="cool-content">
          <my-header></my-header>
          <home-intro></home-intro>
          <daily-offer></daily-offer>
          <bestselling-game></bestselling-game>
          <home-comments></home-comments>
          <latest-game></latest-game>
          <gift-cart></gift-cart>
          <coupon></coupon>
          <latest-blog></latest-blog>
        </div>
      </div>
    </div>
  </section>
  <application></application>
  <my-footer></my-footer>
</template>
<script>
import BestsellingGame from "../components/Home/bestselling-game.vue";
import HomeComments from "../components/Home/HomeComments.vue";
import DailyOffer from "../components/Home/daily-offer.vue";
import HomeIntro from "../components/Home/home-intro.vue";
import LatestBlog from "../components/Home/latest-blog.vue";
import LatestGame from "../components/Home/latest-game.vue";
import MyHeader from "../components/Header/my-header.vue";
import Coupon from "../components/Home/coupon.vue";
import GiftCart from "../components/Home/gift-cart.vue";
import MyFooter from "../components/Footer/MyFooter.vue";
import Application from "../components/Home/application.vue";
import Toolbar from "../components/Toolbar/toolbar.vue";

export default {
  name: "Home",
  components: {
    HomeIntro,
    MyHeader,
    BestsellingGame,
    HomeComments,
    DailyOffer,
    LatestBlog,
    LatestGame,
    Coupon,
    GiftCart,
    MyFooter,
    Application,
    Toolbar,
  },
};
</script>
