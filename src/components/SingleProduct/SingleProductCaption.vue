<template>
  <section class="caption-product">
    <div class="caption-product__wrapper">
      <div class="title-icon">
        <i class="dn-smille" style="background-color: rgb(46, 111, 215)"></i>
        <h3>توضیحات محصول</h3>
      </div>
      <div class="caption-product__wrapper__content">
        <single-product-single-caption
          v-for="(item, i) in items"
          :key="i"
          :text="item.text"
          :title="item.title"
        ></single-product-single-caption>
      </div>
    </div>
  </section>
</template>
<script>
import SingleProductSingleCaption from "./SingleProductSingleCaption.vue";
export default {
  name: "SingleProductCaption",
  props: ["items"],
  components: { SingleProductSingleCaption },
};
</script>
