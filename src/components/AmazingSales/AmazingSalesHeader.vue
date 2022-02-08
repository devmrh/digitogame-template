<template>
  <section class="search-result-header">
    <div class="search-result-header__wrapper search-result-header__wrapper--bg">
      <div class="search-result-header__wrapper__text">
        <div class="search-result-header__wrapper__text__title">
          <h3>
            تخفیفات <span class="red">شگفت انگیز </span
            ><span class="green">دیجیتو گیم</span>
          </h3>
        </div>
        <div class="search-result-header__wrapper__text__desc">
          <p>هر آنچه که نیاز دارید با تخفیفات ویژه خرید کنید</p>
        </div>
      </div>
      <div class="search-result-header__wrapper__timer">
        <div class="sec-title sec-title--big">
          <countdown-timer :seconds="368000"></countdown-timer>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CountdownTimer from "../CountdownTimer.vue";
export default {
  components: { CountdownTimer },
  name: "AmazingSalesHeader",
};
</script>
