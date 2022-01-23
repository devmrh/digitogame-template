<template>
  <div class="game__wrapper__slider__item">
    <div class="game__wrapper__slider__item__image">
      <router-link :to="url"><img :src="image" alt="" /></router-link>
    </div>
    <div class="game__wrapper__slider__item__text">
      <div class="game__wrapper__slider__item__text__title">
        <router-link :to="url">{{ name }}</router-link>
      </div>
      <div class="game__wrapper__slider__item__text__info">
        <div class="game__wrapper__slider__item__text__info__name">
          <router-link :to="url">{{ product }}</router-link>
        </div>
        <div class="game__wrapper__slider__item__text__info__price">
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
  props: ["product", "price", "name", "url", "image"],
  methods: {
    formatPrice,
  },
};
</script>
