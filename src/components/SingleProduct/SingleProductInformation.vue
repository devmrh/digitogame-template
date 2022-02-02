<template>
  <div class="single-product-sidebar__wrapper__item">
    <div v-if="off > 0" class="single-product-sidebar__wrapper__item__discount">
      <span>{{ off }} درصد</span>
    </div>
    <div class="single-product-sidebar__wrapper__item__image">
      <img :src="image" :alt="alt" />
    </div>
    <div class="single-product-sidebar__wrapper__item__text">
      <div class="single-product-sidebar__wrapper__item__text__title">
        <h3>{{ name }}</h3>
      </div>
      <div class="single-product-sidebar__wrapper__item__text__info">
        <ul>
          <li v-for="(item, i) in items" :key="i">
            <span>{{ item.name }} : </span><span>{{ item.desc }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="single-product-sidebar__wrapper__item__actions">
      <div class="single-product-sidebar__wrapper__item__actions__price">
        <ul>
          <li
            v-if="off > 0"
            class="single-product-sidebar__wrapper__item__actions__price--off"
          >
            {{ formatPrice(getOldPrice(price, off)) }} تومان
          </li>
          <li>{{ formatPrice(price) }} تومان</li>
        </ul>
      </div>
      <div class="single-product-sidebar__wrapper__item__actions__btn-add">
        <a href="#"
          ><i class="dn-shopping-cart"
            ><span class="path1"></span><span class="path2"></span
            ><span class="path3"></span><span class="path4"></span></i
          >افزودن به سبد خرید</a
        >
      </div>
      <div class="single-product-sidebar__wrapper__item__actions__btn-support">
        <a href="#"
          ><i class="dn-message-question"
            ><span class="path1"></span><span class="path2"></span
            ><span class="path3"></span></i
          >تماس با پشتیبانی</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { formatPrice, getOldPrice } from "../../assets/js/script";

export default {
  name: "SingleProductInformation",
  props: ["items", "name", "off", "image", "alt", "price"],
  methods: { formatPrice, getOldPrice },
};
</script>
