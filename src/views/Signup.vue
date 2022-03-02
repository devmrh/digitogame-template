<template>
  <section class="login">
    <div class="bg"></div>

    <div class="container">
      <div class="login__wrapper">
        <div class="login__wrapper__content">
          <div class="login__wrapper__content__title">
            <div class="login__wrapper__content__title__icon">
              <i class="dn-tv"
                ><span class="path1"></span><span class="path2"></span
                ><span class="path3"></span><span class="path4"></span
                ><span class="path5"></span><span class="path6"></span
                ><span class="path7"></span
              ></i>
            </div>
            <div class="login__wrapper__content__title__text">
              <h3>دیجیتو گیم</h3>
              <p>عصر جدید بازی های آنلاین</p>
            </div>
          </div>
          <div class="login__wrapper__content__form">
            <div class="login__wrapper__content__form__title">
              <h3>ثبت نام کاربر جدید</h3>
              <p><span>توجه :</span>این اطلاعات دیگر قابل ویرایش نخواهد بود</p>
            </div>
            <div class="login__wrapper__content__form__item">
              <form action="login">
                <div class="form-group">
                  <label for="user-name" class="green">نام کاربری خود را وارد کنید</label>
                  <div class="login__wrapper__content__form__item__input">
                    <i class="dn-user-left-add"
                      ><span class="path1"></span><span class="path2"></span
                      ><span class="path3"></span><span class="path4"></span
                    ></i>
                    <input
                      type="text"
                      class="form-control"
                      id="user-name"
                      v-model="username"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="your-email" class="green">ایمیل خود را وارد کنید</label>
                  <div class="login__wrapper__content__form__item__input">
                    <i class="dn-sms"
                      ><span class="path1"></span><span class="path2"></span
                    ></i>
                    <input
                      type="email"
                      class="form-control"
                      id="your-email"
                      v-model="email"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="your-name" class="green"
                    >نام و نام خانوادگی خود را وارد کنید</label
                  >
                  <div class="login__wrapper__content__form__item__input right">
                    <i class="dn-user-right-add"
                      ><span class="path1"></span><span class="path2"></span
                      ><span class="path3"></span><span class="path4"></span
                    ></i>
                    <input
                      type="text"
                      class="form-control"
                      id="your-name"
                      v-model="name"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="login__wrapper__content__form__item__register">
                  <button type="submit" class="btn" @click.prevent="onClick">
                    ثبت و ارسال اطلاعات
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Signup",
  methods: {
    onClick() {
      console.log(
        `name is ${this.name} email is ${this.email} username is ${this.username}`
      );
    },
  },
  data() {
    return {
      username: "",
      email: "",
      name: "",
    };
  },
};
</script>

<style scoped>
.bg {
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background: url("../assets/img/bg-login.jpg");
  opacity: 1%;
}
</style>
