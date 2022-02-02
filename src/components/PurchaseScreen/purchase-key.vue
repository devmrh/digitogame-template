<template>
  <li @click="copyKey">
    <span>{{ purchasedKey }}</span>
    <i class="dn-copy"><span class="path1"></span><span class="path2"></span></i>
  </li>
</template>
<script>
import image from "../../assets/img/emoji-happy.svg";
export default {
  name: "PurchaseKey",
  props: ["purchasedKey"],
  methods: {
    copyKey() {
      this.$swal({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        html: `<div class="massege massege--success">
                <img src="${image}"></img>
                <span>متن کپی شد</span>
                </div>`,
      });
      navigator.clipboard.writeText(this.purchasedKey);
    },
  },
};
</script>
<style scoped>
li {
  cursor: pointer;
}
</style>
