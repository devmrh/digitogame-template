<template>
  <div class="blog__wrapper__slider__item blog__wrapper__slider__item--modifier">
    <div class="blog__wrapper__slider__item__image">
      <router-link :to="url"> <img :src="image" alt="" /></router-link>
    </div>
    <div class="blog__wrapper__slider__item__text">
      <div class="blog__wrapper__slider__item__text__avatar">
        <router-link :to="writerUrl"><img :src="avatar" alt="" /></router-link>
      </div>
      <div class="blog__wrapper__slider__item__text__title">
        <router-link :to="url">{{ name }}</router-link>
      </div>
      <div class="blog__wrapper__slider__item__text__info">
        <div class="blog__wrapper__slider__item__text__info__discount">
          <span>{{ writer }}</span>
        </div>
        <div class="blog__wrapper__slider__item__text__info__number">
          <span> {{ number }}</span>
        </div>
      </div>
    </div>
    <div class="blog__wrapper__slider__item__date">
      <span>{{ day }}</span>
      <small>{{ month }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "avatar",
    "day",
    "month",
    "image",
    "name",
    "writer",
    "number",
    "url",
    "writerUrl",
  ],
};
</script>
