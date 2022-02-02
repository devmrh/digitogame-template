<template>
  <div
    @click="getID"
    :class="{ 'gallery-product__wrapper__slider__list__item': true, active: isActive }"
  >
    <img :src="image" :alt="alt" />
  </div>
</template>
<script>
export default {
  name: "SingleProductGalleryThumbSlide",
  props: ["image", "alt", "isActive", "id"],
  methods: {
    getID() {
      console.log("from in " + this.id + " is active " + this.isActive);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #2aaf8f;
}
</style>
