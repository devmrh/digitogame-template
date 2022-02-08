<template>
  <section class="">
    <div class="container">
      <div class="roow">
        <div class="cool-toolbar"><toolbar></toolbar></div>
        <div class="cool-content">
          <my-header class="inview"></my-header>
          <amazing-sales-header></amazing-sales-header>
          <amazing-sales-products :items="products"></amazing-sales-products>
          <pagination
            :count="5"
            :active="pageActive"
            @pageChanged="onPageChanged"
          ></pagination>
        </div>
      </div>
    </div>
  </section>
  <application></application>
  <my-footer></my-footer>
</template>
<script>
import Application from "../components/Home/application.vue";
import MyHeader from "../components/Header/my-header.vue";
import MyFooter from "../components/Footer/MyFooter.vue";
import toolbar from "../components/Toolbar/toolbar.vue";
import Pagination from "../components/Pagination.vue";
import AmazingSalesHeader from "../components/AmazingSales/AmazingSalesHeader.vue";
import AmazingSalesProducts from "../components/AmazingSales/AmazingSalesProducts.vue";
import image from "../assets/img/product1.png";

export default {
  name: "AmazingSales",
  methods: {
    onPageChanged(id) {
      this.pageActive = id;
    },
  },
  data() {
    return {
      pageActive: 1,
      products: [
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
          off: 50,
        },
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
          off: 50,
        },
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
          off: 50,
        },
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
          off: 50,
        },
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
          off: 50,
        },
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
          off: 50,
        },
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
          off: 50,
        },
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
          off: 50,
        },
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
          off: 50,
        },
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
          off: 50,
        },
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
          off: 50,
        },
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
          off: 50,
        },
      ],
    };
  },
  components: {
    toolbar,
    MyHeader,
    MyFooter,
    Application,
    Pagination,
    AmazingSalesHeader,
    AmazingSalesProducts,
  },
};
</script>
