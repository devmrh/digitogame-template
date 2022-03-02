<template>
  <section class="sidebar-user">
    <div class="sidebar-user__item">
      <ul>
        <li :class="{ active: activeTab == 1 }" @click="activeTab = 1">
          <i class="dn-coffee"
            ><span class="path1"></span><span class="path2"></span
            ><span class="path3"></span><span class="path4"></span
            ><span class="path5"></span><span class="path6"></span
          ></i>
          <span>داشبورد</span>
        </li>
        <li :class="{ active: activeTab == 2 }" @click="activeTab = 2">
          <i class="dn-profile-circle"
            ><span class="path1"></span><span class="path2"></span
            ><span class="path3"></span
          ></i>
          <span>پروفایل</span>
        </li>
        <li :class="{ active: activeTab == 3 }" @click="activeTab = 3">
          <i class="dn-key-square"
            ><span class="path1"></span><span class="path2"></span
          ></i>
          <span>کدهای خریداری شده</span>
        </li>
        <li :class="{ active: activeTab == 4 }" @click="activeTab = 4">
          <i class="dn-sms-edit"
            ><span class="path1"></span><span class="path2"></span
            ><span class="path3"></span
          ></i>
          <span>ارسال تیکت</span>
        </li>
        <li :class="{ active: activeTab == 5 }" @click="activeTab = 5">
          <i class="dn-sms-tracking"
            ><span class="path1"></span><span class="path2"></span
            ><span class="path3"></span
          ></i>
          <span>همه تیکت ها</span>
        </li>
        <li :class="{ active: activeTab == 6 }" @click="activeTab = 6">
          <i class="dn-dollar-square"
            ><span class="path1"></span><span class="path2"></span
          ></i>
          <span>سامانه خرید و فروش گلد</span>
        </li>

        <li>
          <i class="dn-logout"><span class="path1"></span><span class="path2"></span></i>
          <span>خروج از حساب</span>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: "UpSidebar",
  emits: ["change"],
  watch: {
    activeTab: function (val) {
      this.$emit("change", val);
    },
    active: function (val) {
      this.activeTab = val;
      console.log(val);
    },
  },
  props: { active: { detault: 5 } },

  data() {
    return {
      activeTab: 1,
    };
  },
};
</script>
