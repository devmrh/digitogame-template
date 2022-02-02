<template>
  <li>
    <div
      class="comments-user__wrapper__list__item comments-user__wrapper__list__item--reply"
    >
      <div class="comments-user__wrapper__list__item__header">
        <div class="comments-user__wrapper__list__item__header__avatar">
          <div class="comments-user__wrapper__list__item__header__avatar__image">
            <img :src="avatar" alt="" />
          </div>
          <div class="comments-user__wrapper__list__item__header__avatar__name">
            <span>{{ name }}</span>
            <p>{{ date }}</p>
          </div>
        </div>
        <div class="comments-user__wrapper__list__item__header__action">
          <div class="comments-user__wrapper__list__item__header__action__like">
            <ul>
              <li>
                <a href="#"
                  ><i class="dn-dislike"
                    ><span class="path1"></span><span class="path2"></span
                  ></i>
                  <span v-if="dislike > 0">{{ dislike }} ناپسند</span>
                </a>
              </li>
              <li>
                <a href="#"
                  ><i class="dn-like"
                    ><span class="path1"></span><span class="path2"></span
                  ></i>
                  <span v-if="like > 0">{{ like }} پسند</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="comments-user__wrapper__list__item__header__action__submit">
            <a href="#">پاسخ</a>
          </div>
        </div>
      </div>
      <div class="comments-user__wrapper__list__item__aleart">
        <p>{{ comment }}</p>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: "CommentReply",
  props: ["like", "dislike", "comment", "avatar", "date", "name"],
};
</script>
