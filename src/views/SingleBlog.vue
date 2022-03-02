<template>
  <section class="">
    <div class="container">
      <div class="roow">
        <div class="cool-toolbar"><toolbar></toolbar></div>
        <div class="cool-content">
          <my-header></my-header>
          <section class="post-page-user">
            <div class="roow">
              <div class="post-page-user__cool-content">
                <div class="post-page-user__cool-content__total inview">
                  <single-blog-header
                    :date="date"
                    :name="name"
                    :proImage="proImage"
                    :time="time"
                  ></single-blog-header>

                  <div class="post-page-user__cool-content__total__context">
                    <div class="post-page-user__cool-content__total__context__title">
                      <h3>
                        {{ title }}
                      </h3>
                    </div>
                    <single-blog-content
                      v-for="(item, i) in content"
                      :key="i"
                      :alt="item.alt"
                      :text="item.text"
                      :url="item.url"
                      :src="item.src"
                      :type="item.type"
                    ></single-blog-content>
                    <single-blog-tags :items="tags"></single-blog-tags>
                  </div>
                </div>
                <div class="post-page-user__cool-content__comments">
                  <single-blog-comments :items="comments"></single-blog-comments>
                </div>
              </div>

              <div class="cool-slidebar">
                <single-blog-sidebar
                  v-if="Object.keys(similars).length > 0"
                  :items="similars"
                ></single-blog-sidebar>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
  <application></application>
  <my-footer></my-footer>
</template>
<script>
import image from "../assets/img/Rectangle-81.png";
import image2 from "../assets/img/Rectangle-82.png";
import image3 from "../assets/img/avatar2.png";

import Application from "../components/Home/application.vue";
import MyHeader from "../components/Header/MyHeader.vue";
import MyFooter from "../components/Footer/MyFooter.vue";
import toolbar from "../components/Toolbar/toolbar.vue";
import avatar from "../assets/img/avatar6.png";
import SingleBlogContent from "../components/SingleBlog/SingleBlogContent.vue";
import SingleBlogTags from "../components/SingleBlog/SingleBlogTags.vue";
import SingleBlogHeader from "../components/SingleBlog/SingleBlogHeader.vue";
import SingleBlogSidebar from "../components/SingleBlog/SingleBlogSidebar.vue";
import SingleBlogComments from "../components/SingleBlog/SingleBlogComments.vue";
export default {
  name: "SingleBlog",
  components: {
    toolbar,
    MyHeader,
    MyFooter,
    Application,
    SingleBlogContent,
    SingleBlogTags,
    SingleBlogHeader,
    SingleBlogSidebar,
    SingleBlogComments,
  },
  data() {
    return {
      date: "5 آذر 1400",
      name: "محمد پادیاب",
      time: "20 دقیقه",
      proImage: image3,
      title: "تاثیر بزرگ کرونا بر صنعت بازی؛ از افزایش چشم گیر فروش تا تاخیر در پروژه ها",
      comments: [
        {
          comment:
            "این یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست است ",
          name: "محمد پادیاب",
          date: "یک ماه پیش",
          avatar: avatar,
          like: 0,
          dislike: 0,
          replies: [
            {
              comment:
                "این یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست است ",
              name: "محمد پادیاب",
              date: "یک ماه پیش",
              avatar: avatar,
              like: 0,
              dislike: 0,
            },
          ],
        },
        {
          comment:
            "این یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست است ",
          name: "محمد پادیاب",
          date: "یک ماه پیش",
          avatar: avatar,
          like: 5,
          dislike: 6,
          replies: [
            {
              comment:
                "این یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست است ",
              name: "محمد پادیاب",
              date: "یک ماه پیش",
              avatar: avatar,
              like: 5,
              dislike: 6,
            },
          ],
        },
        {
          comment:
            "این یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست استاین یک کامنت تست است ",
          name: "محمد پادیاب",
          date: "یک ماه پیش",
          avatar: avatar,
          like: 2,
          dislike: 3,
          replies: [],
        },
      ],
      similars: [
        {
          image: "https://static.cdkeysell.ir/wp-content/uploads/2019/11/0-800x450.jpg",
          alt: "",
          name: "World Of Warcraft",
          url: "",
        },
        {
          image:
            "data:image/jpeg;base64,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",
          alt: "",
          name: "Ember Spirit Of Dota 2",
          url: "",
        },
        {
          image:
            "https://dotawallpapers.com/wallpaper/dotawallpapers.com-void-spirit-fan-art-dota-2-4092-1920x1358.jpg",
          alt: "",
          name:
            "Ember Spirit Of Dota 2Ember Spirit Of Dota 2Ember Spirit Of Dota 2Ember Spirit Of Dota 2Ember Spirit Of Dota 2Ember Spirit Of Dota 2",
          url: "",
        },
      ],

      content: [
        { type: "image", src: image, alt: "" },
        {
          type: "p",
          text:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
        },
        {
          type: "p",
          text:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
        },
        {
          type: "p",
          text:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
        },
        {
          type: "p",
          text:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
        },
        {
          type: "link",
          url: "#",
          text: "سایه ی ویروس کرونا بر صنعت بازی",
        },
        {
          type: "p",
          text:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
        },
        {
          type: "image",
          src: image2,
          alt: "",
        },
        {
          type: "quotes",
          text:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
        },
        {
          type: "p",
          text:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
        },
        {
          type: "p",
          text:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
        },
        {
          type: "p",
          text:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
        },
      ],
      tags: [
        { url: "#", text: "برچسب" },
        { url: "#", text: "برچسب" },
        { url: "#", text: "برچسب" },
        { url: "#", text: "برچسب" },
        { url: "#", text: "برچسب" },
        { url: "#", text: "برچسب" },
        { url: "#", text: "برچسب" },
        { url: "#", text: "برچسب" },
        { url: "#", text: "برچسب" },
        { url: "#", text: "برچسب" },
        { url: "#", text: "برچسب" },
        { url: "#", text: "برچسب" },
        { url: "#", text: "برچسب" },
        { url: "#", text: "برچسب" },
        { url: "#", text: "برچسب" },
        { url: "#", text: "برچسب" },
        { url: "#", text: "برچسب" },
        { url: "#", text: "برچسب" },
      ],
    };
  },
};
</script>
