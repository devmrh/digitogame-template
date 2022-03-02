<template>
  <div :class="{ screen__content__specs: true, inview: screenSize < 992 }">
    <ul>
      <purchase-detail-field
        v-for="(item, i) in items"
        :key="i"
        :text="item.text"
        :topic="item.topic"
        :isStressed="item.isStressed"
      ></purchase-detail-field>
    </ul>
  </div>
</template>
<script>
import PurchaseDetailField from "./purchase-detail-field.vue";

export default {
  name: "PurchaseDetails",
  props: ["items"],
  data() {
    return {
      screenSize: 993,
    };
  },
  mounted() {
    let mVue = this;
    window.addEventListener("resize", function () {
      mVue.screenSize = this.window.innerWidth;
    });
    mVue.screenSize = this.window.innerWidth;
  },
  components: {
    PurchaseDetailField,
  },
};
</script>
