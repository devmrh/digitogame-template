<template>
  <section class="cart-sidebar">
    <div class="cart-sidebar__wrapper">
      <cart-alert></cart-alert>
      <cart-off></cart-off>
      <cart-price :off="off" :price="price" :total="total"></cart-price>
      <cart-banks></cart-banks>
    </div>
  </section>
</template>
<script>
import CartAlert from "./CartAlert.vue";
import CartBanks from "./CartBanks.vue";
import CartOff from "./CartOff.vue";
import CartPrice from "./CartPrice.vue";
export default {
  components: { CartAlert, CartOff, CartPrice, CartBanks },
  name: "CartSidebar",
  data() {
    return {
      price: 12000000,
      off: 2000000,
      total: 10000000,
    };
  },
};
</script>
