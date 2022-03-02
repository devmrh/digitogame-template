<template>
  <div v-if="type == 'image'" class="post-page-user__cool-content__total__context__img">
    <img :src="src" :alt="alt" />
  </div>
  <p v-else-if="type == 'p'">{{ text }}</p>
  <div
    v-else-if="type == 'link'"
    class="post-page-user__cool-content__total__context__game-ndustry"
  >
    <span>{{ text }}</span>
    <router-link :to="url"></router-link>
  </div>
  <div v-else class="post-page-user__cool-content__total__context__quotation">
    <div class="post-page-user__cool-content__total__context__quotation__icon">
      <i class="dn-quote-top"><span class="path1"></span><span class="path2"></span></i>
    </div>

    <p>
      {{ text }}
    </p>
    <div class="post-page-user__cool-content__total__context__quotation__icon2">
      <i class="dn-quote-top"><span class="path1"></span><span class="path2"></span></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "SingleBlogContent",
  props: ["type", "text", "src", "alt", "url"],
};
</script>
