<template>
  <section :class="{ 'content-user': true, active: active }">
    <div class="content-user__product">
      <div v-if="Object.keys(this.items).length > 0" class="row" id="products">
        <up-product-single
          v-for="(item, i) in items"
          @click="activeProduct = i"
          :key="i"
          :alt="item.alt"
          :url="item.url"
          :name="item.name"
          :active="activeProduct == i"
          :image="item.image"
        ></up-product-single>
      </div>
    </div>
    <div v-if="Object.keys(this.items).length > 0" class="content-user__table">
      <div
        class="content-user__table__information content-user__table__information--color"
      >
        <up-products-information :items="currentInfo"></up-products-information>
      </div>
    </div>
    <up-products-empty v-if="Object.keys(this.items).length <= 0"></up-products-empty>
  </section>
</template>
<script>
import UpProductsEmpty from "./UpProductsEmpty.vue";
import UpProductsInformation from "./UpProductsInformation.vue";
import UpProductSingle from "./UpProductSingle.vue";
export default {
  components: { UpProductSingle, UpProductsInformation, UpProductsEmpty },
  name: "UpProducts",
  data() {
    return {
      activeProduct: -1,
      currentInfo: [],
    };
  },

  watch: {
    activeProduct: function (val) {
      let infos = document.getElementById("product-information");
      let products = document.getElementsByClassName("content-user__product__item");
      let lastProduct = products[products.length - 1];
      2;
      if (infos.style.height == "" || infos.style.height == "0") {
        this.currentInfo = this.informations[val];

        setTimeout(() => {
          infos.style.height = `${
            document.getElementById("product-information").scrollHeight
          }px`;
          lastProduct.scrollIntoView({ behavior: "smooth" });
        }, 1);
      } else {
        infos.style.height = `0`;
        setTimeout(() => {
          this.currentInfo = this.informations[val];
          setTimeout(() => {
            infos.style.height = `${
              document.getElementById("product-information").scrollHeight
            }px`;
            lastProduct.scrollIntoView({ behavior: "smooth" });
          }, 1);
        }, 300);
      }
    },
  },

  props: {
    active: { default: false },
    items: { default: [] },
    informations: { default: [] },
  },
};
</script>
