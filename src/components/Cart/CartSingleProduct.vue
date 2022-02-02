<template>
  <div class="cart-context__wrapper__item">
    <div class="cart-context__wrapper__item__image">
      <a href="#"><img src="@/assets/img/cart1.png" alt="" /></a>
    </div>
    <div class="cart-context__wrapper__item__text">
      <div class="cart-context__wrapper__item__text__title">
        <h3>
          <a href="#">{{ name }}</a>
        </h3>
      </div>
      <div class="cart-context__wrapper__item__text__info">
        <div class="cart-context__wrapper__item__text__info__right">
          <ul>
            <li>{{ console }}</li>
            <li>ظرفیت : {{ count }}</li>
            <li>
              تعداد :
              <p>
                <i class="dn-plus" data-type="plus" @click="onChangeCount(true)"></i
                ><span>{{ mCount }}</span
                ><i class="dn-minus" data-type="minus" @click="onChangeCount(false)"></i
                ><input type="hidden" name="" value="1" min="0" max="30" />
              </p>
            </li>
          </ul>
        </div>
        <div class="cart-context__wrapper__item__text__info__left">
          <div class="cart-context__wrapper__item__text__info__left__new-price">
            <span>{{ price }} تومان</span>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-context__wrapper__item__delete" @click="onClose">
      <i class="dn-close"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartSingleProduct",
  props: ["name", "console", "count", "price", "off", "productCount"],
  data() {
    return {
      mCount: 0,
    };
  },
  mounted() {
    this.mCount = this.productCount;
  },
  methods: {
    onClose() {
      console.log("clicked on closed");
    },
    onChangeCount(isPlus) {
      if (isPlus) {
        this.mCount = parseInt(this.mCount) + 1;
      } else {
        if (parseInt(this.mCount) > 1) this.mCount = parseInt(this.mCount) - 1;
      }
    },
  },
};
</script>
