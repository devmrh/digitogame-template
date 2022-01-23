<template>
  <div
    :class="{
      'toolbar-content__wrapper__slider__tab toolbar-content__wrapper__slider__tab--xbox': true,
      active: isActive,
    }"
    @click="changeActive"
  >
    <div class="toolbar-content__wrapper__slider__tab__text">
      <div class="toolbar-content__wrapper__slider__tab__text__icon">
        <i :class="icon"></i>
      </div>
      <div class="toolbar-content__wrapper__slider__tab__text__title">
        <h3>{{ name }}</h3>
      </div>
    </div>
    <div class="toolbar-content__wrapper__slider__tab__left">
      <div class="toolbar-content__wrapper__slider__tab__left__number">
        <span>{{ number }}</span>
      </div>
      <div class="toolbar-content__wrapper__slider__tab__left__button">
        <router-link :to="url">آرشیو</router-link>
      </div>
    </div>
  </div>
  <toolbar-content-sub-slide
    v-for="(item, i) in items"
    :active="isActive"
    :key="i"
    :alt="item.alt"
    :image="item.image"
    :url="item.url"
  ></toolbar-content-sub-slide>
</template>

<script>
import toolbarContentSubSlide from "./toolbar-content-sub-slide.vue";
export default {
  components: { toolbarContentSubSlide },
  props: ["name", "url", "number", "icon", "items"],
  methods: {
    changeActive: function () {
      this.isActive = !this.isActive;
      this.$emit("reloadSwiper");
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>
