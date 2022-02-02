<template>
  <section class="cat-product-sidebar">
    <div
      class="cat-product-sidebar__icon-filter"
      data-toggle="openbox"
      data-target="filter"
      data-status="false"
    >
      <i class="dn-filter"></i>
    </div>
    <div
      class="cat-product-sidebar__wrapper"
      data-toggle="showbox"
      data-target="filter"
      data-status="false"
    >
      <div data-toggle="closebox" data-target="filter"></div>
      <cat-product-sidebar-category :items="categories"></cat-product-sidebar-category>
      <cat-product-sidebar-price></cat-product-sidebar-price>
      <cat-product-filter-console :items="consoles"></cat-product-filter-console>
      <cat-product-sidebar-delivery></cat-product-sidebar-delivery>
    </div>
  </section>
</template>

<script>
import CatProductFilterConsole from "./CatProductSidebarConsole.vue";
import CatProductSidebarCategory from "./CatProductSidebarCategory.vue";
import CatProductSidebarDelivery from "./CatProductSidebarDelivery.vue";
import CatProductSidebarPrice from "./CatProductSidebarPrice.vue";
export default {
  components: {
    CatProductSidebarCategory,
    CatProductSidebarPrice,
    CatProductFilterConsole,
    CatProductSidebarDelivery,
  },
  name: "CatProductSidebar",
  props: ["categories", "consoles"],
};
</script>
