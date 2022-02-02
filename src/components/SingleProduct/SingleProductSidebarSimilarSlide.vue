<template>
  <router-link :to="url">
    <div class="single-product-sidebar__wrapper__item">
      <div class="single-product-sidebar__wrapper__item__image">
        <img :src="image" :alt="alt" />
      </div>
      <div class="single-product-sidebar__wrapper__item__text">
        <div
          class="single-product-sidebar__wrapper__item__text__title single-product-sidebar__wrapper__item__text__title--none-before"
        >
          <h3>{{ name }}</h3>
        </div>
        <div
          class="single-product-sidebar__wrapper__item__text__detail"
          :style="{ '--width': mWidth + '%', '--opacity': opacity + '%' }"
        >
          <ul>
            <li>
              <span>{{ formatPrice(price) }} تومان</span><span>{{ coName }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
import { formatPrice } from "../../assets/js/script";
export default {
  name: "SingleProductSidebarSimilarSlide",

  props: ["price", "name", "image", "alt", "coName", "url", "width"],
  watch: {
    width: function (val) {
      if (val > 100) {
        this.raiseOpacity();

        this.mWidth = 100;
      } else {
        this.mWidth = this.width;
      }
    },
  },
  methods: {
    formatPrice,
    raiseOpacity() {
      if (this.shouldStart) {
        return;
      }
      this.shouldStart = true;
      let mVue = this;
      let myInterval = setInterval(() => {
        mVue.opacity += 100 / 200;
        if (mVue.opacity >=90) {
          mVue.opacity = 0;
          clearInterval(myInterval);
          this.shouldStart = false;

          mVue.$emit("timerComplete");
        }
      }, 1);
    },
  },
  data() {
    return {
      opacity: 0,
      mWidth: 0,
      shouldStart: false,
    };
  },
  emits: ["timerComplete"],
};
</script>
<style scoped>
.single-product-sidebar__wrapper__item__text__detail::before {
  width: var(--width);
  background: linear-gradient(270deg, #00ffd1 var(--opacity), rgba(0, 255, 209, 0) 100%);
}
</style>
