<template>
  <section class="search-result-header">
    <div class="search-result-header__wrapper">
      <div class="search-result-header__wrapper__text">
        <div class="search-result-header__wrapper__text__title">
          <h3>
            نتایج جست و جو برای: <span class="green">{{ searchPhrase }}</span>
          </h3>
        </div>
        <div class="search-result-header__wrapper__text__desc">
          <p>
            در صورتی که هنوز عنوان مد نظر خود را پیدا نکرده اید با
            <span> پشتیبانی</span> تماس بگیرید
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "SearchResultHeader",
  props: ["searchPhrase"],
};
</script>
