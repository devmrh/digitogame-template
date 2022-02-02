<template>
  <div class="col-lg-3 col-md-4 col-sm-6">
    <div class="product__wrapper__item">
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
          <div class="product__wrapper__item__text__price__new">
            <span>{{ formatPrice(price.toString()) }} تومان</span>
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
import { formatPrice } from "../../assets/js/script";

export default {
  name: "CatSingleProduct",
  props: ["price", "name", "image", "alt", "url"],
  methods: {
    formatPrice,
  },
};
</script>
