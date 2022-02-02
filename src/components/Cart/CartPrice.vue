<template>
  <div class="cart-sidebar__wrapper__price">
    <ul>
      <li>
        <span>مبلغ کل :</span>
        <p>{{ formatPrice(price) }} تومان</p>
      </li>
      <li>
        <span>میزان تخفیف اعمال شده :</span>
        <p class="blue">{{ formatPrice(off) }} تومان</p>
      </li>
      <li>
        <span>مبلغ قابل پرداخت :</span>
        <p>{{ formatPrice(total) }} تومان</p>
      </li>
    </ul>
    <a href="#">تسویه حساب</a>
  </div>
</template>
<script>
import { formatPrice } from "../../assets/js/script";
export default {
  name: "CartPrice",
  methods: { formatPrice },
  props: ["price", "off", "total"],
};
</script>
