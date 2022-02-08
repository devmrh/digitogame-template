<template>
  <section class="product">
    <div class="product__wrapper">
      <div class="product__wrapper__row">
        <single-product
          v-for="(item, i) in items"
          :key="i"
          :alt="item.alt"
          :image="item.image"
          :name="item.name"
          :price="item.price"
          :url="item.url"
          :off="item.off"
          :class="{ inview: (i + 1) % 5 == 0 }"
        ></single-product>
      </div>
    </div>
  </section>
</template>
<script>
import SingleProduct from "../SingleProduct.vue";
export default {
  components: { SingleProduct },
  name: "AmazingSalesProducts",
  props: ["items"],
};
</script>
