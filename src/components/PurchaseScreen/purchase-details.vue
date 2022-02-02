<template>
  <div class="screen__content__specs">
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
  components: {
    PurchaseDetailField,
  },
};
</script>
