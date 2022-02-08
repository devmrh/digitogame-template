<template>
  <section class="login">
    <div class="container">
      <div :class="{ login__wrapper: true, code: hasSentCode }">
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
              <h3>ورود به پنل کاربری</h3>
            </div>
            <div class="login__wrapper__content__form__item">
              <form action="login">
                <div class="form-group">
                  <label for="phone"
                    >جهت ورود به پنل لطفا شماره تلفن خود را وارد نمایید</label
                  >
                  <div class="login__wrapper__content__form__item__input">
                    <i class="dn-call-incoming"
                      ><span class="path1"></span><span class="path2"></span
                      ><span class="path3"></span
                    ></i>
                    <input
                      type="text"
                      class="form-control"
                      id="phone"
                      pattern="9(0[1-2]|1[0-9]|3[0-9]|2[0-1])-?[0-9]{3}-?[0-9]{4}"
                      :readonly="hasSentCode"
                      v-model="phoneNumber"
                    />
                  </div>
                </div>
                <div class="form-group received-code show-on-code">
                  <label for="code">کد دریافتی را در این کادر وارد کنید</label>
                  <div class="login__wrapper__content__form__item__input">
                    <i class="dn-scan"
                      ><span class="path1"></span><span class="path2"></span
                      ><span class="path3"></span><span class="path4"></span
                      ><span class="path5"></span><span class="path6"></span
                      ><span class="path7"></span
                    ></i>
                    <input type="text" class="form-control" id="code" placeholder="" />
                  </div>
                </div>
                <div
                  class="login__wrapper__content__form__item__resend-code show-on-code"
                >
                  <div class="login__wrapper__content__form__item__resend-code__timer">
                    <p
                      id="clock"
                      @click="sendCode"
                      :style="{
                        color: countDown > 0 ? '' : '#9affed',
                        cursor: countDown > 0 ? '' : 'pointer',
                      }"
                    >
                      ارسال مجدد کد {{ countDown > 0 ? "تا" : "" }}
                      <span v-if="countDown > 0">{{ countDownToString }}</span>
                    </p>
                  </div>
                  <div class="login__wrapper__content__form__item__resend-code__edit">
                    <a href="#" @click.prevent="onChangeNumber">ویرایش شماره</a>
                  </div>
                </div>
                <div class="login__wrapper__content__form__item__register">
                  <button type="button" class="btn" @click.prevent="onSentCode">
                    <span> ثبت و دریافت کد فعال سازی</span>
                    <span> اعتبار سنجی و ورود</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="login__wrapper__content__select">
            <div class="login__wrapper__content__select__title">
              <h3>ورود با</h3>
            </div>
            <div class="login__wrapper__content__select__socials">
              <ul>
                <li>
                  <a href="#"
                    ><i class="dn-facebook"
                      ><span class="path1"></span><span class="path2"></span></i
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><i class="dn-google"
                      ><span class="path1"></span><span class="path2"></span
                      ><span class="path3"></span></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="login__wrapper__text hide-on-code">
          <p>
            با ورود و یا ثبت نام در دیجیتوگیم شما شرایط و قوانین استفاده از سرویس‌های سایت
            دیجیتوگیم و قوانین حریم خصوصی آن را می‌پذیرید.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { unsuccessfulToast } from "../assets/js/script";
import sadEmoji from "../assets/svg/sad-emoji.svg";
export default {
  name: "Login",
  computed: {
    countDownToString() {
      let minutes = parseInt(this.countDown / 60);
      let seconds = parseInt(this.countDown % 60);
      let res = "";

      if (seconds < 10) {
        res += `0${seconds} : `;
      } else {
        res += `${seconds} : `;
      }
      if (minutes < 10) {
        res += `0${minutes}`;
      } else {
        res += `${minutes}`;
      }
      return res;
    },
  },
  watch: {
    countDown: function (val) {
      let mVue = this;
      if (this.countDown > 0) {
        setTimeout(() => {
          mVue.countDown--;
        }, 1000);
      }
    },
  },
  methods: {
    onSentCode() {
      if (!this.hasSentCode) {
        console.log(`phone is : ${this.phoneNumber}`);

        this.hasSentCode = true;
        this.countDown = 3;
        let showElements = document.getElementsByClassName("show-on-code");
        Array.from(showElements).forEach((e) => {
          if (e.classList.contains("login__wrapper__content__form__item__resend-code")) {
            e.style.marginBottom = "20px";
          }
          e.style.height = `${e.scrollHeight}px`;
        });
        let hideElements = document.getElementsByClassName("hide-on-code");
        Array.from(hideElements).forEach((e) => {
          if (e.classList.contains("login__wrapper__text")) {
            e.style.marginTop = "0px";
          }
          e.style.height = 0;
        });
      } else {
        unsuccessfulToast(this.$swal, sadEmoji);
      }
    },
    sendCode() {
      if (this.countDown > 0) {
        return;
      }
      this.countDown = 3;
    },
    onChangeNumber() {
      this.hasSentCode = false;
      let showElements = document.getElementsByClassName("show-on-code");
      Array.from(showElements).forEach((e) => {
        e.style.height = 0;
      });
      let hideElements = document.getElementsByClassName("hide-on-code");
      Array.from(hideElements).forEach((e) => {
        if (e.classList.contains("login__wrapper__text")) {
          e.style.marginTop = "40px";
        }
        e.style.height = `${e.scrollHeight}px`;
      });
    },
  },

  data() {
    return {
      countDown: 0,
      isAnimating: false,
      phoneNumber: "",
      hasSentCode: false,
    };
  },
};
</script>
