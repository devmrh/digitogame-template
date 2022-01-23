<template>
  <div class="home-intro__wrapper__item">
    <div class="home-intro__wrapper__item__background">
      <img :src="imageurl" :alt="alt" />
    </div>
    <div class="home-intro__wrapper__item__text">
      <div class="home-intro__wrapper__item__text__title">
        <h3>
          {{ text }}
        </h3>
      </div>
      <div class="home-intro__wrapper__item__text__button">
        <ul>
          <li><router-link :to="see_route">مشاهده محصول</router-link></li>
          <li><router-link :to="buy_route">خرید محصول</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text", "buy_route", "see_route", "imageurl", "alt"],
};
</script>
