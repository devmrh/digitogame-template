<template>
  <div class="blog__wrapper__slider__item">
    <div class="blog__wrapper__slider__item__image">
      <router-link :to="url"> <img :src="image" alt="" /></router-link>
    </div>
    <div class="blog__wrapper__slider__item__text">
      <div class="blog__wrapper__slider__item__text__title">
        <router-link :to="url">{{ name }}</router-link>
      </div>
      <div class="blog__wrapper__slider__item__text__info">
        <div class="blog__wrapper__slider__item__text__info__discount">
          <span>{{ off }} درصد تخفیف</span>
        </div>
        <div class="blog__wrapper__slider__item__text__info__price">
          <span>{{ formatPrice(price.toString()) }} تومان </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatPrice } from "../../assets/js/script";


export default {
  name: "daily-offer-slide",

  props: ["off", "price", "name", "url", "image"],
  methods: {
    formatPrice,
  },
};
</script>
