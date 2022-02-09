<template>
  <div
    :class="{
      'col-lg-3': off <= 0,
      'col-md-4': off <= 0,
      'col-sm-6': off <= 0,
      product__wrapper__row__col: off > 0 || isSearch,
    }"
  >
    <div
      :class="{ product__wrapper__item: true, 'product__wrapper__item--hover': off > 0 }"
    >
      <div v-if="off > 0" class="product__wrapper__item__discount">
        <span>{{ off }} درصد</span>
      </div>
      <div class="product__wrapper__item__image">
        <router-link :to="url"><img :src="image" :alt="alt" /></router-link>
      </div>
      <div class="product__wrapper__item__text">
        <div class="product__wrapper__item__text__title">
          <h3>
            <router-link :to="url">{{ name }}</router-link>
          </h3>
        </div>
        <div class="product__wrapper__item__text__price">
          <div v-if="off > 0" class="product__wrapper__item__text__price__old">
            <span>{{ formatPrice(getOldPrice(price, off)) }} تومان</span>
          </div>
          <div class="product__wrapper__item__text__price__new">
            <span>{{ formatPrice(price) }} تومان</span>
          </div>
        </div>
        <div class="product__wrapper__item__text__button">
          <a href="#">افزودن به سبد خرید</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatPrice, getOldPrice } from "../assets/js/script";

export default {
  name: "SingleProduct",
  props: {
    price: {},
    name: {},
    image: {},
    alt: {},
    url: {},
    off: { default: 0 },
    isSearch: { default: false },
  },

  methods: {
    formatPrice,
    getOldPrice,
  },
};
</script>
<style scoped>
.product__wrapper__item__discount span{
 line-height: unset;
 font-size: 12px;
}
</style>