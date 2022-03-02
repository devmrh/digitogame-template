<template>
  <div class="content-user__nothing">
    <div class="content-user__nothing__item">
      <div class="content-user__nothing__item__icon">
        <i class="dn-emoji-sad"
          ><span class="path1"></span><span class="path2"></span
          ><span class="path3"></span><span class="path4"></span
        ></i>
      </div>
      <div class="content-user__nothing__item__text">
        <span>{{ text }}</span>
      </div>
      <router-link :to="url">
        <div
          class="content-user__product__item__btn content-user__product__item__btn--height"
        >
          {{ btnText }}
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpProductsEmpty",
  props: {
    text: { default: "شما هنوز هیچ عنوانی خریداری نکرده اید" },
    btnText: { default: "برو به فروشگاه" },
    url: { default: "/" },
  },
};
</script>
