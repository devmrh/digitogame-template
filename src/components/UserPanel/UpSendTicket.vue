<template>
  <section :class="{ 'content-user': true, active: active }">
    <div class="content-user__form">
      <form action="ddd">
        <div class="form-group">
          <label for="ticket-title">موضوع</label>
          <input type="text" class="form-control" id="ticket-title" v-model="title" />
        </div>
        <div class="form-group">
          <label for="ticket-text">توضیحات</label>
          <textarea
            class="form-control"
            id="ticket-text"
            rows="3"
            v-model="text"
          ></textarea>
        </div>
        <div class="content-user__form__button">
          <button type="submit" @click.prevent="">آپلود فایل</button>
          <button type="submit" @click.prevent="sendTicket">ارسال تیکت</button>
        </div>
      </form>
      <div class="content-user__form__text">
        <ul>
          <li>
            <span class="color"></span>
            <span>از ارسال تیکت ها ی تکراری و پشت سرهم خودداری کنید</span>
          </li>
          <li>
            <span class="color2"></span>
            <span>قبل از ارسال تیکت حتما سوالات متداول را به خئبی مطالعه کنید</span>
          </li>
          <li>
            <span class="color3"></span>
            <span
              >سوالات و مشکلات خود را به صورت واضح بیان کنید و در دریافت پاسخ شکیبا
              باشی</span
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "UpSendTicket",
  data() {
    return {
      title: "",
      text: "",
    };
  },
  methods: {
    sendTicket() {
      console.log(`title is ${this.title} text is ${this.text}`);
    },
  },
  props: ["active"],
};
</script>
