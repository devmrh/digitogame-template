<template>
  <section class="single-product-sidebar">
    <div class="single-product-sidebar__wrapper">
      <single-product-information
        :items="items"
        :image="proImage"
        :name="name"
        :off="off"
        :price="price"
      ></single-product-information>
      <single-product-sidebar-similar :items="similar"></single-product-sidebar-similar>
    </div>
  </section>
</template>
<script>
import SingleProductInformation from "./SingleProductInformation.vue";
import image from "../../assets/img/single-product1.png";
import similarImage from "../../assets/img/single-product2.png";

import SingleProductSidebarSimilar from "./SingleProductSidebarSimilar.vue";
export default {
  components: { SingleProductInformation, SingleProductSidebarSimilar },
  name: "SingleProductSidebar",
  data() {
    return {
      off: 10,
      price: 90000,
      name: "بتلفیلد ۲۴۰۲",
      proImage: image,
      items: [
        {
          name: "عنوان انگلیسی",
          desc: "Battlefield 2042",
        },
        {
          name: "پلتفرم",
          desc: "ویندوز - استیم",
        },
        {
          name: "ژانر",
          desc: "اکشن",
        },
      ],
      similar: [
        {
          name: "سایبر پانک ۷۷۰۲",
          price: 2000000,
          alt: "",
          image: similarImage,
          coName: "استیم",
          url: "#",
        },
        {
          name: "سایبر پانک ۷۷۰۲",
          price: 2000000,
          alt: "",
          image: similarImage,
          coName: "استیم",
          url: "#",
        },
        {
          name: "سایبر پانک ۷۷۰۲",
          price: 2000000,
          alt: "",
          image: similarImage,
          coName: "استیم",
          url: "#",
        },
      ],
    };
  },
};
</script>

<style scoped>
.single-product-sidebar {
  position: sticky;
  bottom: 0;
  top: 0;
}
</style>
