<template>
  <section class="">
    <div class="container">
      <div class="roow">
        <div class="cool-toolbar"><toolbar></toolbar></div>
        <div class="cool-content">
          <my-header></my-header>
          <div class="roow-sidebar roow-sidebar--mt40">
            <div class="cool-sidebar-list">
              <cat-product-sidebar
                :categories="categories"
                :consoles="consoles"
              ></cat-product-sidebar
              >>
            </div>
            <div class="cool-context">
              <cat-product-filter></cat-product-filter>
              <cat-products :items="products"></cat-products>
              <pagination
                :active="activePage"
                :count="5"
                @pageChanged="onActivePageChanged"
              ></pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <application></application>
  <my-footer></my-footer>
</template>
<script>
import Application from "../components/Home/application.vue";
import MyHeader from "../components/Header/MyHeader.vue";
import MyFooter from "../components/Footer/MyFooter.vue";
import toolbar from "../components/Toolbar/toolbar.vue";
import CatProductSidebar from "../components/CatProduct/CatProductSidebar.vue";
import CatProductFilter from "../components/CatProduct/CatProductFilter.vue";
import CatProducts from "../components/CatProduct/CatProducts.vue";
import Pagination from "../components/Pagination.vue";
import image from "../assets/img/product1.png";
import image1 from "../assets/svg/xbox.svg";
import image2 from "../assets/svg/playstation.svg";
import image3 from "../assets/svg/steam.svg";
import image4 from "../assets/svg/giftcart.svg";
import image5 from "../assets/svg/pc.svg";
import image6 from "../assets/svg/origin.svg";
export default {
  name: "CatProduct",

  components: {
    toolbar,
    MyHeader,
    MyFooter,
    Application,
    CatProductSidebar,
    CatProductFilter,
    CatProducts,
    Pagination,
  },
  methods: {
    onActivePageChanged(id) {
      this.activePage = id;
    },
  },
  data() {
    return {
      activePage: 1,
      consoles: [
        { name: "ایکس باکس", image: image1, colors: ["#00E1B3", "#00C395"] },
        { name: "پلی استیشن", image: image2, colors: ["#2E6FD7", "#1051B9"] },
        { name: "استیم", image: image3, colors: ["#FF00C7", "#E100A9"] },
        { name: "گیفت کارت", image: image4, colors: ["#A16AEF", "#2E6FD7"] },
        { name: "کامپیوتر", image: image5, colors: ["#FF3A5E", "#FF6BCD"] },
        { name: "اوریجین", image: image6, colors: ["#FD6B63", "#DF4D45"] },
      ],
      categories: [
        {
          count: 30,
          name: "اکشن",
        },
        {
          count: 20,
          name: "استراتژیک",
        },
        {
          count: 5,
          name: "مسابقه ای",
        },
        {
          count: 15,
          name: "ماجراجویی",
        },
        {
          count: 10,
          name: "نقش آفرینی",
        },
        {
          count: 185,
          name: "ورزشی",
        },
      ],
      products: [
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
        },
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
        },
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
        },
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
        },
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
        },
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
        },
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
        },
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
        },
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
        },
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
        },
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
        },
        {
          name: "اکانت ظرفیت قانونی بتلفیلد 2024 ظرفیت های 1/2/3",
          price: 1300000,
          alt: "",
          url: "#",
          image: image,
        },
      ],
    };
  },
};
</script>
