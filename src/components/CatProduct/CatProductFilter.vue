<template>
  <section class="filter-product">
    <div class="filter-product__wrapper">
      <div class="filter-product__wrapper__title">
        <h3>فیلتر محصولات براساس</h3>
      </div>
      <div class="filter-product__wrapper__list">
        <input type="radio" id="newest" name="filter-product" checked />
        <label for="newest">جدیدترین</label>
        <input type="radio" id="most-visited" name="filter-product" />
        <label for="most-visited">پر بازدید ترین</label>
        <input type="radio" id="popular" name="filter-product" />
        <label for="popular">محبوب ترین</label>
        <input type="radio" id="bestselling" name="filter-product" />
        <label for="bestselling">پر فروش ترین</label>
        <input type="radio" id="cheapest" name="filter-product" />
        <label for="cheapest"> ارزان ترین</label>
        <input type="radio" id="expensive" name="filter-product" />
        <label for="expensive"> گران ترین</label>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "CatProductFilter",
};
</script>
