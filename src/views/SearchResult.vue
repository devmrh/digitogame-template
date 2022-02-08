<template>
  <section class="">
    <div class="container">
      <div class="roow">
        <div class="cool-toolbar"><toolbar></toolbar></div>
        <div class="cool-content">
          <my-header class="inview"></my-header>
          <search-result-header
            :searchPhrase="this.$route.query.phrase"
          ></search-result-header>
          <search-result-products :items="products"></search-result-products>
          <pagination
            :active="pageActive"
            :count="5"
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
import image from "../assets/img/product1.png";
import SearchResultHeader from "../components/SearchResult/SearchResultHeader.vue";
import SearchResultProducts from "../components/SearchResult/SearchResultProducts.vue";

export default {
  name: "SearchResult",
  methods: {
    onPageChanged(id) {
      this.pageActive = id;
    },
  },
  props: ["searchPhrase"],
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
    SearchResultHeader,
    SearchResultProducts,
  },
};
</script>
, SearchResultProducts
