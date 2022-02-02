<template>
  <div class="comments-user__wrapper__post">
    <form action="post">
      <div class="comments-user__wrapper__post__info">
        <div class="comments-user__wrapper__post__info__image">
          <img src="@/assets/img/avator.png" alt="" />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <input
              type="text"
              class="form-control"
              v-model="name"
              placeholder="نام و نام خانوادگی"
            />
          </div>
          <div class="form-group col-md-6">
            <input
              type="email"
              class="form-control"
              v-model="email"
              placeholder="آدرس ایمیل"
            />
          </div>
        </div>
      </div>
      <div class="comments-user__wrapper__post__massege">
        <textarea
          name="comment"
          id="comment"
          v-model="comment"
          placeholder="دیدگاه شما"
        ></textarea>
      </div>
      <div class="comments-user__wrapper__post__button">
        <button @click.prevent="sendComment">ارسال دیدگاه</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "SendCommentLogout",
  methods: {
    sendComment() {
      console.log(
        `comment is : ${this.comment} email is : ${this.email} name is : ${this.name}`
      );
    },
  },
  data() {
    return {
      comment: "",
      name: "",
      email: "",
    };
  },
};
</script>
