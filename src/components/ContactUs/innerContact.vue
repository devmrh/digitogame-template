<template>
  <section class="contactus">
    <div class="contactus__wrapper">
      <div class="roow">
        <div class="cool-3">
          <div class="contactus__wrapper__list">
            <ul>
              <contact-cart
                v-for="(item, i) in items"
                :key="i"
                :isActive="activeId == i"
                :color="item.color"
                :topic="item.topic"
                :text="item.text"
                :icon="item.icon"
                @click="onCartClicked(i)"
              ></contact-cart>
            </ul>
          </div>
        </div>
        <div class="cool-9">
          <div class="contactus__wrapper__item">
            <contact-text
              :contactText="items[activeId].contactText"
              :contactTopic="items[activeId].contactTopic"
            ></contact-text>
            <contact-form :name="name" @inputChanged="onInputChanged"></contact-form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
activeId

<script>
import contactCart from "./contact-cart.vue";
import ContactForm from "./contact-form.vue";
import ContactText from "./contact-text.vue";
export default {
  components: { contactCart, ContactText, ContactForm },
  name: "innerContact",
  methods: {
    onInputChanged: function (data) {
      if (data.name == "name") {
        this.name = data.text;
      } else if (data.name == "email") {
        this.email = data.text;
      } else if (data.name == "ticketText") {
        this.ticketText = data.text;
      }
    },
    onCartClicked(id) {
      this.activeId = id;
    },
  },
  data() {
    return {
      activeId: 0,
      name: "",
      email: "",
      ticketText: "",

      items: [
        {
          contactTopic: "آدرس",
          contactText: "متن مخصوص آدرس",
          color: "#00ffd1",
          iconColor: "#131129",
          textColor: "",
          icon: "dn-location",
          topic: "آدرس",
          text: "تهران-خ فاطمه غربی – پلاک ۴۵۲",
        },
        {
          contactTopic: "ایمیل",
          contactText: "متن مخصوص ایمیل",

          color: "#ffcd6b",
          icon: "dn-email",
          topic: "ایمیل",
          text: "mpadyabm@gmail.com",
        },
        {
          contactTopic: "تلفن",
          contactText: "متن مخصوص تلفن",
          color: "#d5a0ff",
          icon: "dn-call",
          topic: "تلفن",
          text: "۰۹۱۲۰۷۴۴۰۹۷ – ۰۹۱۹۴۱۰۹۵۶۶",
        },
        {
          contactTopic: "ساعت کاری",
          contactText:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده" +
            " از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و" +
            "سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای" +
            "متنوع با هدف بهبود",
          color: "#fd6b63",
          icon: "dn-timer",
          topic: "ساعت کاری",
          text: "از 8 صبح تا 9 شب",
        },
      ],
    };
  },
};
</script>
