<template>
  <section class="cart-context">
    <div class="cart-context__wrapper">
      <cart-single-product
        v-for="(item, i) in items"
        :key="i"
        :console="item.console"
        :name="item.name"
        :off="item.off"
        :price="item.price"
        :count="item.count"
        :productCount="item.productCount"
        class="inview"
      ></cart-single-product>
    </div>
  </section>
</template>
<script>
import CartSingleProduct from "./CartSingleProduct.vue";
export default {
  components: { CartSingleProduct },
  name: "CartProducts",
  props: ["items"],
};
</script>
