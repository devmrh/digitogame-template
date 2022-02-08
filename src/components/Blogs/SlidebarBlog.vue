<template>
  <section class="blog-sidebar">
    <div class="cool-side-categories cool-side-categories--margin">
      <div class="cool-side-categories__head ">
        <h3>دسته بندی ها</h3>
      </div>

      <div class="cool-side-categories__content">
        <div class="cool-side-categories__content__menu">
          <ul>
            <li class="orange">
              <a href="#">بازی</a>
            </li>
            <li class="pink">
              <a href="#">آموزش</a>
            </li>
            <li class="blue">
              <a href="#"> اخبار استودیوها </a>
            </li>
            <li class="purple">
              <a href="#">تکنولوژی</a>
            </li>
            <li class="green">
              <a href="#">آموزشی</a>
            </li>
            <li class="yellow-side">
              <a href="#">بدون دسته بندی</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="banner">
      <div class="banner__head">
        <h3>محل قرار گرفتن یک بنر</h3>
      </div>
      <div class="banner__img">
        <img src="@/assets/img/Mask-Group(1).png" alt="" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "SlidebarBlog",
};
</script>
