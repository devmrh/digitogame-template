<template>
  <section class="comments-user">
    <div class="title-icon">
      <i class="dn-smille" data-bg-color="#63fd72" data-box-shadow="#63fd7226"></i>
      <h3>نظرات در باره این محصول</h3>
    </div>
    <div class="comments-user__wrapper">
      <send-comment-logout class="inview"></send-comment-logout>
      <div class="comments-user__wrapper__list" v-if="Object.keys(this.items).length > 0">
        <ul>
          <comment
            v-for="(item, i) in items"
            :key="i"
            :avatar="item.avatar"
            :comment="item.comment"
            :dislike="item.dislike"
            :like="item.like"
            :date="item.date"
            :name="item.name"
            :replies="item.replies"
          ></comment>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import Comment from "../Comment.vue";
import SendCommentLogout from "../SendCommentLogout.vue";
export default {
  components: { SendCommentLogout, Comment },
  name: "SingleBlogComments",
  props: ["items"],
};
</script>
