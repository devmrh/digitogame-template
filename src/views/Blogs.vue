<template>
  <section class="">
    <div class="container">
      <div class="roow">
        <div class="cool-toolbar"><toolbar></toolbar></div>
        <div class="cool-content">
          <my-header class="inview"></my-header>
          <section class="blog-content">
            <div class="roow">
              <div class="roow__total-content">
                <blog-list
                  :items="news"
                  color="#fd6b63"
                  title="جدید ترین اخبار "
                  class="inview"
                ></blog-list>

                <blog-list
                  :items="offer"
                  color="#00cd9f"
                  title="پرطرفدار ترین اخبار "
                  class="inview"
                ></blog-list>

                <blog-list
                  :items="offer"
                  color="#2e6fd7"
                  title="اخبار پیشنهادی سردبیر"
                  class="inview"
                ></blog-list>
                <pagination :active="2" :count="5"></pagination>
              </div>

              <div class="cool-slidebar"><slidebar-blog></slidebar-blog></div>
            </div>
          </section>
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
import SlidebarBlog from "../components/Blogs/SlidebarBlog.vue";
import Pagination from "../components/Pagination.vue";
import blogImage from "../assets/img/Rectangle-54.png";
import profileImage from "../assets/img/Ellipse-10.png";
import BlogList from "../components/Blogs/blog-list.vue";
export default {
  name: "Blogs",

  components: {
    toolbar,
    MyHeader,
    MyFooter,
    Application,
    Pagination,
    SlidebarBlog,
    BlogList,
  },
  data() {
    return {
      news: [
        {
          blogImage: blogImage,
          profileImage: profileImage,
          date: "5 آذر 1400",
          text:
            "تأثیر بزرگ کرونا بر صنعت بازی; از افزایش چشم گیر فروش تا" +
            "تاخیر در پروژه ها",
          writer: "محمد پادیاب",
        },
        {
          blogImage: blogImage,
          profileImage: profileImage,
          date: "5 آذر 1400",
          text:
            "تأثیر بزرگ کرونا بر صنعت بازی; از افزایش چشم گیر فروش تا" +
            "تاخیر در پروژه ها",
          writer: "محمد پادیاب",
        },
        {
          blogImage: blogImage,
          profileImage: profileImage,
          date: "5 آذر 1400",
          text:
            "تأثیر بزرگ کرونا بر صنعت بازی; از افزایش چشم گیر فروش تا" +
            "تاخیر در پروژه ها",
          writer: "محمد پادیاب",
        },
        {
          blogImage: blogImage,
          profileImage: profileImage,
          date: "5 آذر 1400",
          text:
            "تأثیر بزرگ کرونا بر صنعت بازی; از افزایش چشم گیر فروش تا" +
            "تاخیر در پروژه ها",
          writer: "محمد پادیاب",
        },
        {
          blogImage: blogImage,
          profileImage: profileImage,
          date: "5 آذر 1400",
          text:
            "تأثیر بزرگ کرونا بر صنعت بازی; از افزایش چشم گیر فروش تا" +
            "تاخیر در پروژه ها",
          writer: "محمد پادیاب",
        },
        {
          blogImage: blogImage,
          profileImage: profileImage,
          date: "5 آذر 1400",
          text:
            "تأثیر بزرگ کرونا بر صنعت بازی; از افزایش چشم گیر فروش تا" +
            "تاخیر در پروژه ها",
          writer: "محمد پادیاب",
        },
      ],
      best: [
        {
          blogImage: blogImage,
          profileImage: profileImage,
          date: "5 آذر 1400",
          text:
            "تأثیر بزرگ کرونا بر صنعت بازی; از افزایش چشم گیر فروش تا" +
            "تاخیر در پروژه ها",
          writer: "محمد پادیاب",
        },
        {
          blogImage: blogImage,
          profileImage: profileImage,
          date: "5 آذر 1400",
          text:
            "تأثیر بزرگ کرونا بر صنعت بازی; از افزایش چشم گیر فروش تا" +
            "تاخیر در پروژه ها",
          writer: "محمد پادیاب",
        },
        {
          blogImage: blogImage,
          profileImage: profileImage,
          date: "5 آذر 1400",
          text:
            "تأثیر بزرگ کرونا بر صنعت بازی; از افزایش چشم گیر فروش تا" +
            "تاخیر در پروژه ها",
          writer: "محمد پادیاب",
        },
        {
          blogImage: blogImage,
          profileImage: profileImage,
          date: "5 آذر 1400",
          text:
            "تأثیر بزرگ کرونا بر صنعت بازی; از افزایش چشم گیر فروش تا" +
            "تاخیر در پروژه ها",
          writer: "محمد پادیاب",
        },
        {
          blogImage: blogImage,
          profileImage: profileImage,
          date: "5 آذر 1400",
          text:
            "تأثیر بزرگ کرونا بر صنعت بازی; از افزایش چشم گیر فروش تا" +
            "تاخیر در پروژه ها",
          writer: "محمد پادیاب",
        },
        {
          blogImage: blogImage,
          profileImage: profileImage,
          date: "5 آذر 1400",
          text:
            "تأثیر بزرگ کرونا بر صنعت بازی; از افزایش چشم گیر فروش تا" +
            "تاخیر در پروژه ها",
          writer: "محمد پادیاب",
        },
      ],
      offer: [
        {
          blogImage: blogImage,
          profileImage: profileImage,
          date: "5 آذر 1400",
          text:
            "تأثیر بزرگ کرونا بر صنعت بازی; از افزایش چشم گیر فروش تا" +
            "تاخیر در پروژه ها",
          writer: "محمد پادیاب",
        },
        {
          blogImage: blogImage,
          profileImage: profileImage,
          date: "5 آذر 1400",
          text:
            "تأثیر بزرگ کرونا بر صنعت بازی; از افزایش چشم گیر فروش تا" +
            "تاخیر در پروژه ها",
          writer: "محمد پادیاب",
        },
        {
          blogImage: blogImage,
          profileImage: profileImage,
          date: "5 آذر 1400",
          text:
            "تأثیر بزرگ کرونا بر صنعت بازی; از افزایش چشم گیر فروش تا" +
            "تاخیر در پروژه ها",
          writer: "محمد پادیاب",
        },
        {
          blogImage: blogImage,
          profileImage: profileImage,
          date: "5 آذر 1400",
          text:
            "تأثیر بزرگ کرونا بر صنعت بازی; از افزایش چشم گیر فروش تا" +
            "تاخیر در پروژه ها",
          writer: "محمد پادیاب",
        },
        {
          blogImage: blogImage,
          profileImage: profileImage,
          date: "5 آذر 1400",
          text:
            "تأثیر بزرگ کرونا بر صنعت بازی; از افزایش چشم گیر فروش تا" +
            "تاخیر در پروژه ها",
          writer: "محمد پادیاب",
        },
        {
          blogImage: blogImage,
          profileImage: profileImage,
          date: "5 آذر 1400",
          text:
            "تأثیر بزرگ کرونا بر صنعت بازی; از افزایش چشم گیر فروش تا" +
            "تاخیر در پروژه ها",
          writer: "محمد پادیاب",
        },
      ],
    };
  },
};
</script>
