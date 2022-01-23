<template>
         <header class="main-header" id="top">
    <div class="main-header__wrapper">
      <div class="main-header__wrapper__login">
        <div class="main-header__wrapper__login__image">
          <a href="#"><img src="@/assets/img/avator.png" alt=""></a>
        </div>
        <div class="main-header__wrapper__login__name">
          <a href="#">ورود یا ثبت نام</a>
        </div>
      </div>
      <div class="main-header__wrapper__notification">
        <a href="#"><i class="dn-notification"><span class="path1"></span><span class="path2"></span></i></a>
      </div>
      <div class="main-header__wrapper__search">
        <form action="search">
          <input type="text" placeholder="دنبال چیزی هستید؟">
          <button><i class="dn-search"><span class="path1"></span><span class="path2"></span></i></button>
        </form>
        <a href="#" data-toggle="openbox" data-target="search" data-status="false"><i class="dn-search"><span
              class="path1"></span><span class="path2"></span></i></a>
      </div>
      <div class="main-header__wrapper__cart">
        <a href="#"><i class="dn-cart"><span class="path1"></span><span class="path2"></span></i></a>
      </div>
    </div>
  </header>

</template>

<script>
export default {
    name:'my-header'
}
</script>