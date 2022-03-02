<template>
  <section>
    <div class="container">
      <div class="roow">
        <div class="cool-toolbar"><toolbar></toolbar></div>
        <div class="cool-content">
          <my-header></my-header>
          <inner-contact></inner-contact>
        </div>
      </div>
    </div>
  </section>
  <application></application>
  <my-footer></my-footer>
</template>
<script>
import Application from "../components/Home/application.vue";
import MyHeader from "../components/Header/MyHeader.vue";
import MyFooter from "../components/Footer/MyFooter.vue";
import toolbar from "../components/Toolbar/toolbar.vue";
import InnerContact from "../components/ContactUs/innerContact.vue";
export default {
  name: "ContactUs",

  components: { toolbar, MyHeader, MyFooter, Application, InnerContact },
};
</script>
