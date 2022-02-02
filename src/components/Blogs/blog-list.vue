<template>
  <div class="roow__total-content__cool-context">
    <div class="blog-content__title">
      <div class="blog-content__title__right">
        <div class="blog-content__title__right__icon">
          <i class="dn-smille" :style="{ background: color }"></i>
        </div>
        <div class="blog-content__title__right__news">
          <h3>
            {{ title }}
            <span :style="{ color: color }"> دیجیتو مگ </span>
          </h3>
        </div>
      </div>

      <div class="blog-content__title__left">
        <a href="#"> مشاهده آرشیو </a>
      </div>
    </div>

    <div class="blog-content__total">
      <div class="row">
        <blogs-list-item
          v-for="(item, i) in items"
          :key="i"
          :blogImage="item.blogImage"
          :date="item.date"
          :profileImage="item.profileImage"
          :text="item.text"
          :writer="item.writer"
        ></blogs-list-item>
      </div>
    </div>
  </div>
</template>
<script>
import BlogsListItem from "../../components/Blogs/blogs-list-item.vue";

export default {
  name: "BlogList",
  components: {
    BlogsListItem,
  },
  mounted() {
    console.log(this.color);
  },
  props: ["items", "title", "color"],
};
</script>
