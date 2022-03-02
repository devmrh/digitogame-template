<template>
  <section :class="{ 'content-user': true, active: active }">
    <div class="content-user__table">
      <div class="content-user__table__notice">
        <div class="content-user__table__notice__top">
          <i class="dn-danger1"
            ><span class="path1"></span><span class="path2"></span
            ><span class="path3"></span
          ></i>
          <span
            >اطلاعات حساب کاربری شما غیرقابل ویرایش است و جهت ویرایش باید با پشتیبانی تماس
            بگیرید
          </span>
        </div>
        <div class="content-user__table__notice__bottom">
          <span
            >شما با موقیت احراز هویت شده اید، میتوانید از سایت خرید های خود را انجام
            دهید</span
          >
        </div>
      </div>
      <div
        class="content-user__table__notice__bottom content-user__table__notice__bottom--color"
      >
        <span
          >جهت تکمیل خرید خود از وب سایت باید احراز هویت صورت گیرد، جهت راهنمایی اینجا
          کلیک کنید!</span
        >
      </div>
      <div class="content-user__table__information">
        <ul>
          <li v-for="(item, i) in items" :key="i">
            <span>{{ item.title }} :</span>
            <span :class="{ color3: item.confirmed == false }">{{
              item.confirmed != false ? item.text : "احراز هویت صورت نگرفته است"
            }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-if="Object.keys(inactives).length > 0"
      class="content-user__table__information content-user__table__information--uplod"
    >
      <ul>
        <li v-for="(item, i) in inactives" :key="i">
          <span>{{ item }} : </span>
          <span style="cursor: pointer">
            <i class="dn-export"><span class="path1"></span><span class="path2"></span></i
            >آپلود</span
          >
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: "UpProfile",
  props: ["active", "items", "inactives"],
};
</script>
