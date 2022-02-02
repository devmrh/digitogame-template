<template>
  <div class="gallery-product__wrapper__slider__show__item">
    <img :src="image" :alt="alt" />
  </div>
</template>
<script>
export default {
  name: "SingleProductGallerySlide",
  props: ["image", "alt"],
};
</script>
