<template>
  <router-link :to="url">
    <div
      :class="{ 'toolbar-content__wrapper__slider__tab-content': true, active: !active }"
    >
      <div class="toolbar-content__wrapper__slider__tab-content__item">
        <img :src="image" :alt="alt" />
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["image", "url", "alt", "active"],
};
</script>

<style scoped>
.active {
  width: 0;
  border: none;
  padding: 0;
  margin: 0;
}
div {
  display: flex;
}
</style>
