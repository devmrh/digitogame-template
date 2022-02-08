<template>
  <section class="product">
    <div class="product__wrapper">
      <div class="row" data-space="15">
        <single-product
          v-for="(item, i) in items"
          :key="i"
          :alt="item.alt"
          :image="item.image"
          :name="item.name"
          :price="item.price"
          :url="item.url"
          :class="{ inview: (i + 1) % 4 == 0 }"
        ></single-product>
      </div>
    </div>
  </section>
</template>
<script>
import SingleProduct from "../SingleProduct.vue";
export default {
  components: { SingleProduct },
  props: ["items"],
};
</script>
