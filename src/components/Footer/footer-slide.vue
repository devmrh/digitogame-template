<template>
  <div class="main-footer__wrapper__content__item__nemad__image">
    <img :src="image" :alt="alt" />
  </div>
</template>
<script>
export default {
  props: ["image", "alt"],
};
</script>
