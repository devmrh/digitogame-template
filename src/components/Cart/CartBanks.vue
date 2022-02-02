<template>
  <div class="cart-sidebar__wrapper__dargah">
    <div class="cart-sidebar__wrapper__dargah__text">
      <p>انتخاب درگاه پرداخت :</p>
    </div>
    <div class="cart-sidebar__wrapper__dargah__select">
      <input type="radio" id="select1" name="dargah" checked />
      <label for="select1"><img src="@/assets/img/select1.png" alt="" /></label>
      <input type="radio" id="select2" name="dargah" />
      <label for="select2"><img src="@/assets/img/select2.png" alt="" /></label>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartBanks",
  
};
</script>
