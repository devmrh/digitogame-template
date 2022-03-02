<template>
  <div class="post-page-user__cool-content__total__header">
    <div class="post-page-user__cool-content__total__header__user">
      <div class="post-page-user__cool-content__total__header__user__img">
        <img :src="proImage" alt="profile-image" />
      </div>

      <div class="post-page-user__cool-content__total__header__user__name">
        <span>{{ name }}</span>
      </div>
    </div>

    <div class="post-page-user__cool-content__total__header__date">
      <div class="post-page-user__cool-content__total__header__date__title">
        <span>{{ date }}</span>
      </div>
    </div>

    <div class="post-page-user__cool-content__total__header__time">
      <div class="post-page-user__cool-content__total__header__time__title">
        <span>زمان مورد نیاز برای مطالعه: {{ time }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SingleBlogHeader",
  props: ["proImage", "name", "date", "time"],
};
</script>
