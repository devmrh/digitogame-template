<template>
  <div class="post-page-user__cool-content__total__context__labels">
    <div class="post-page-user__cool-content__total__context__labels__title">
      <span>برچسب ها :</span>
    </div>

    <div class="post-page-user__cool-content__total__context__labels__menu">
      <ul>
        <li v-for="(item, i) in items" :key="i">
          <router-link :to="item.url">{{ item.text }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "SingleBlogTags",
  props: ["items"],
};
</script>
