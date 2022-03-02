<template>
  <section class="blog-sidebar blog-sidebar--user" style="position: sticky">
    <div class="cool-side-categories cool-side-categories--padding">
      <div class="cool-side-categories__head cool-side-categories__head--after">
        <h3>مطالب مشابه</h3>
      </div>
      <div class="cool-side-categories__content">
        <div class="cool-side-categories__content__menu-saidebar">
          <ul>
            <li v-for="(item, i) in items" :key="i">
              <div class="cool-side-categories__content__menu-saidebar__news">
                <div class="cool-side-categories__content__menu-saidebar__news__img">
                  <img :src="item.image" :alt="item.alt" />
                  <div
                    class="cool-side-categories__content__menu-saidebar__news__img__title"
                  >
                    <span>{{ item.name }}</span>
                  </div>
                </div>
              </div>
              <router-link :to="item.url"></router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "SingleBlogSidebar",
  props: ["items"],
};
</script>
