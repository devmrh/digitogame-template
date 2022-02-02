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
        {
          name: "ریجن",
          desc: "آزاد-آرژانتین",
        },
        {
          name: "تاریخ انتشار",
          desc: "۸۲ آبان ۰۰۴۱",
        },
        {
          name: "امتیاز",
          desc: "4.8 از ۵",
        },
        {
          name: "تحویل",
          desc: "فوری",
        },
        {
          name: "زبان",
          desc: "انگلیسی - روسی",
        },
        {
          name: "هدیه",
          desc: "دارد",
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
