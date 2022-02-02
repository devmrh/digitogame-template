<template>
  <div class="home-intro__wrapper__item">
    <div class="home-intro__wrapper__item__background">
      <img :src="imageurl" :alt="alt" />
    </div>
    <div
      class="home-intro__wrapper__item__text"
      :style="{ '--height': mHeight + '%', '--opacity': opacity }"
    >
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
  data() {
    return {
      opacity: 0,
      mHeight: 0,
      shouldStart: false,
    };
  },
  props: ["text", "buy_route", "see_route", "imageurl", "alt", "height"],
  watch: {
    height: function (val) {
      if (val > 100) {
        this.raiseOpacity();

        this.mHeight = 100;
      } else {
        this.mHeight = this.height;
      }
    },
  },
  methods: {
    raiseOpacity() {
      if (this.shouldStart) {
        return;
      }
      this.shouldStart = true;
      let mVue = this;
      let myInterval = setInterval(() => {
        mVue.opacity += 0.85 / 200;
        if (mVue.opacity >= 0.3) {
          mVue.opacity = 0;
          clearInterval(myInterval);
          this.shouldStart = false;

          mVue.$emit("timerComplete");
        }
      }, 1);
    },
  },
  emits: ["timerComplete"],
};
</script>
<style scoped>
.home-intro__wrapper__item__text::before {
  height: var(--height);
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.85),
    rgba(255, 255, 255, var(--opacity))
  );
}
</style>
