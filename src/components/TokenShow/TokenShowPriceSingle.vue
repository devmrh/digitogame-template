<template>
  <li>
    <div
      :class="{
        'token-price__wrapper__item': true,
        'token-price__wrapper__item--color': colorized,
      }"
    >
      <div class="token-price__wrapper__item__title">
        <img :src="image" :alt="alt" />
        <p>{{ high ? "بیشترین" : "کمترین" }} قیمت در {{ time }} گذشته :</p>
      </div>
      <div class="token-price__wrapper__item__value">
        <span>{{ formatPrice(price) }}</span>
      </div>
    </div>
  </li>
</template>
<script>
import { formatPrice } from "../../assets/js/script";
export default {
  name: "TokenShowPriceSingle",
  methods: {
    formatPrice,
  },
  props: {
    time: { default: "24 ساعت" },
    price: {},
    high: { default: false },
    colorized: { default: false },
    image: {},
    alt: {},
  },
};
</script>
