<template>
  <section class="property-product">
    <div class="property-product__wrapper">
      <div class="title-icon">
        <i class="dn-smille" data-bg-color="#A16AEF" data-box-shadow="#a16aef26"></i>
        <h3>ویژگی های محصول</h3>
      </div>
      <div class="property-product__wrapper__list">
        <ul>
          <singe-product-single-property
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            :id="i"
            :name="item.name"
            :shadowColor="item.shadowColor"
          ></singe-product-single-property>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import SingeProductSingleProperty from "./SingeProductSingleProperty.vue";
export default {
  components: { SingeProductSingleProperty },
  name: "SingleProductProperties",
  props: ["items"],
};
</script>
