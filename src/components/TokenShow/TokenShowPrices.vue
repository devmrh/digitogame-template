<template>
  <section class="token-price">
    <div class="token-price__wrapper">
      <ul>
        <token-show-price-single
          v-for="(item, i) in items"
          :key="i"
          :alt="item.alt"
          :colorized="i % 2 == 0"
          :high="item.high"
          :image="item.image"
          :price="item.price"
          :time="item.time"
          class="inview"
        ></token-show-price-single>
      </ul>
    </div>
  </section>
</template>
<script>
import TokenShowPriceSingle from "./TokenShowPriceSingle.vue";
export default {
  components: { TokenShowPriceSingle },
  name: "TokenShowPrices",
  props: ["items"],
};
</script>
