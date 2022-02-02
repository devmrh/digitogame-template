<template>
  <div class="cat-product-sidebar__wrapper__item">
    <div class="cat-product-sidebar__wrapper__item__title">
      <h3>فیلتر بر اساس قیمت</h3>
      <p>لطفا مبلغ مورد نظر را بر حسب تومان وارد نمایید</p>
    </div>
    <div class="cat-product-sidebar__wrapper__item__form">
      <div class="cat-product-sidebar__wrapper__item__form__content">
        <label for="Low">کم ترین قیمت </label>
        <input id="Low" type="number" />
      </div>
      <div class="cat-product-sidebar__wrapper__item__form__content">
        <label for="Low">بیشترین قیمت</label>
        <input id="Low" type="number" />
      </div>
      <button>صافی</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "CatProductSidebarPrice",
};
</script>
<style scoped>
input[type="number"] {
  -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
