<template>
  <section class="required-system">
    <div class="required-system__wrapper">
      <div class="title-icon">
        <i class="dn-smille" data-bg-color="#fdad63" data-box-shadow="#ff862e26"></i>
        <h3>سیستم مورد نیاز</h3>
      </div>
      <div class="required-system__wrapper__list">
        <ul>
          <single-product-required-system-field
            v-for="(item, i) in items"
            :key="i"
            :desc="item.desc"
            :englishName="item.englishName"
            :name="item.name"
          ></single-product-required-system-field>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import SingleProductRequiredSystemField from "./SingleProductRequiredSystemField.vue";
export default {
  name: "SingleProductRequiredSystem",
  props: ["items"],
  components: { SingleProductRequiredSystemField },
};
</script>
