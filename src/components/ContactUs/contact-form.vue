<template>
  <div class="contactus__wrapper__item__form">
    <form action="contactus">
      <div class="form-row">
        <div class="form-group col-md-6">
          <!-- @change="inputChanged('name', name)" -->
          <input
            v-model="name"
            type="text"
            class="form-control"
            id="your-name"
            placeholder="نام و نام خانوادگی"
          />
        </div>
        <!--  @change="inputChanged('email', email)" -->
        <div class="form-group col-md-6">
          <input
            type="email"
            v-model="email"
            class="form-control"
            id="your-email"
            placeholder="ایمیل"
          />
        </div>
      </div>
      <div class="form-group">
        <!-- @change="inputChanged('ticketText', ticketText)" -->
        <textarea
          name="massege"
          v-model="ticketText"
          id="massege"
          placeholder="متن پیام شما"
        ></textarea>
      </div>
      <button class="btn" @click="formSubmit">ارسال پیام شما</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "ContactForm",
  props: ["name", "email", "ticketText"],
  emits: ["inputChanged"],
  methods: {
    inputChanged: function (name, text) {
      this.$emit("inputChanged", { name, text });
    },
    formSubmit: function (e) {
      e.preventDefault();

      console.log(
        `name is ${this.name} , email is ${this.email} , text is ${this.ticketText}`
      );
    },
  },
};
</script>
