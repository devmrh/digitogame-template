<template>
  <div class="col-lg-3 col-sm-6">
    <div class="comment__wrapper__item">
      <div class="comment__wrapper__item__header">
        <div class="comment__wrapper__item__header__number">
          <span>{{ number }}</span>
        </div>
        <div class="comment__wrapper__item__header__icon">
          <i class="dn-daler"></i>
        </div>
      </div>
      <div class="comment__wrapper__item__title">
        <router-link :to="url">{{ name }}</router-link>
      </div>
      <div class="comment__wrapper__item__desc">
        <p>
          {{ text }}
        </p>
      </div>
      <div class="comment__wrapper__item__button">
        <router-link :to="url">اطلاعات بیشتر<i class=""></i></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["number", "name", "url", "text"],
};
</script>
