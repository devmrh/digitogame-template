<template>
  <div class="cart-sidebar__wrapper__discount">
    <input type="text" placeholder="کد تخفیف :" v-model="code" />
    <a href="#" @click.prevent="calculateOff">اعمال تخفیف</a>
  </div>
</template>
<script>
export default {
  name: "CartOff",
  data() {
    return {
      code: "",
    };
  },
  methods: {
    calculateOff() {
      console.log(this.code);
    },
  },
};
</script>
