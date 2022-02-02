<template>
  <div class="col-lg-4 col-md-6">
    <div class="blog-content__total__blog">
      <div class="blog-content__total__blog__img">
        <img :src="blogImage" alt="test" />

        <div class="blog-content__total__blog__img__label">
          <span>پرطرفدار</span>
        </div>

        <div class="blog-content__total__blog__img__user">
          <div class="blog-content__total__blog__img__user__data">
            <div class="blog-content__total__blog__img__user__data__img">
              <img :src="profileImage" alt="" />
            </div>
            <div class="blog-content__total__blog__img__user__data__name">
              <span>{{ writer }}</span>
            </div>
          </div>
          <div class="blog-content__total__blog__img__user__date">
            <span>{{ date }}</span>
          </div>
        </div>
        <div class="blog-content__total__blog__img__text">
          <p>
            {{ text }}
          </p>
        </div>
      </div>
      <a href="#"></a>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogsListItem",
  props: ["blogImage", "profileImage", "date", "text", "writer"],
};
</script>
