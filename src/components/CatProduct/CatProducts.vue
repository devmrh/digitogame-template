<template>
  <section class="product">
    <div class="product__wrapper">
      <div class="row" data-space="15">
        <cat-single-product
          v-for="(item, i) in items"
          :key="i"
          :alt="item.alt"
          :image="item.image"
          :name="item.name"
          :price="item.price"
          :url="item.url"
          :class="{ inview: (i + 1) % 4 == 0 }"
        ></cat-single-product>
      </div>
    </div>
  </section>
</template>
<script>
import CatSingleProduct from "./CatSingleProduct.vue";
export default {
  components: { CatSingleProduct },
  props: ["items"],
};
</script>
