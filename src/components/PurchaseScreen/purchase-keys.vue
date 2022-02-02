<template>
  <div class="screen__content__sidebar">
    <div class="screen__content__sidebar__head">
      <div class="screen__content__sidebar__head__icon">
        <img src="@/assets/svg/purchase.svg" alt="" />
      </div>
      <div class="screen__content__sidebar__head__text">
        <span
          >خرید شما {{ !success ? "" : "با " }}
          <span :style="{ color: success ? '#00ffd1' : 'red' }">{{
            success ? "موفقیت" : "متاسفانه"
          }}</span>
          انجام {{ !success ? "نشد" : "شد " }}</span
        >
      </div>
      <div
        class="screen__content__sidebar__head__item"
        v-if="Object.keys(this.keys).length > 0"
      >
        <div class="screen__content__sidebar__head__item__tittle">
          <span>لایسنس های دریافتی شما : </span>
        </div>
        <ul>
          <purchase-key
            :purchasedKey="item"
            v-for="(item, i) in keys"
            :key="i"
          ></purchase-key>
        </ul>
      </div>
    </div>
    <div class="screen__content__sidebar__item">
      <div class="screen__content__sidebar__item__btn">
        <a href="#">برو به پنل کاربری</a>
      </div>
    </div>
  </div>
</template>
<script>
import purchaseKey from "./purchase-key.vue";
export default {
  name: "PurchaseKeys",
  props: ["keys", "success"],
  components: { purchaseKey },
};
</script>
