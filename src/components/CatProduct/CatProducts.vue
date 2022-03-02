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
          :class="{ inview: i % rowCount == 0 }"
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
  data() {
    return {
      rowCount: 3,
    };
  },
  methods: {
    onResize() {
      let innerWidth = window.innerWidth;
      if (innerWidth < 576) {
        this.rowCount = 1;
      } else if (innerWidth < 768) {
        this.rowCount = 2;
      } else if (innerWidth < 992) {
        this.rowCount = 3;
      } else {
        this.rowCount = 4;
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
};
</script>
