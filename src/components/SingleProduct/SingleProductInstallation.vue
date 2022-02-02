<template>
  <section class="learn-inastallition">
    <div class="learn-inastallition__wrapper">
      <div class="title-icon">
        <i class="dn-smille" data-bg-color="#FD6B63" data-box-shadow="#fb214933"></i>
        <h3>آموزش نصب بازی</h3>
      </div>
      <div class="learn-inastallition__wrapper__list">
        <ul>
          <single-product-installation-step
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            :name="item.name"
            :text="item.text"
          ></single-product-installation-step>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import SingleProductInstallationStep from "./SingleProductInstallationStep.vue";
export default {
  name: "SingleProductInstallation",
  components: { SingleProductInstallationStep },
  props: ["items"],
};
</script>
