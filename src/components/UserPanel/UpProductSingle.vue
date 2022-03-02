<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-12">
    <div :class="{ 'content-user__product__item': true, active: active }">
      <router-link :to="url"></router-link>
      <div class="content-user__product__item__picture">
        <img :src="image" :alt="alt" />
      </div>
      <div class="content-user__product__item__text">
        <span>{{ name }}</span>
      </div>
      <div class="content-user__product__item__btn">
        <router-link :to="url">مشاهده جزئیات</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpProductSingle",
  props: {
    alt: { default: "" },
    name: { default: "سی دی کی اورجینال" },
    url: { default: "#" },
    image: {},
    active: { default: false },
  },
};
</script>
