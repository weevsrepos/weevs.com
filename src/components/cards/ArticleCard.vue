<template>
  <div class="article-card">
    <section class="image--section">
      <router-link to="#">
        <img :src="item.img" class="main-image" alt=""/>

        <div class="arrow">
          <Icon href="arrow-right" size="42" fill="#000" />
        </div>
      </router-link>
    </section>

    <Badge :text="item.badge" class="mt-24 mb-16"/>

    <h2 class="body-mobile-l--medium heading-s--medium mb-24 line-height-mobile-32 line-height-42 ">
      {{ item.title }}
    </h2>

    <div>
      <ul class="d-flex align-center navigation">
        <li>
          <ul class="d-flex align-center">
            <li class="w-24 h-24"><img :src="item.author.image" :alt="item.author.name"/></li>
            <li class="caption-m--regular ml-8 text-black">{{ item.author.name }}</li>
          </ul>
        </li>
        <li class="dot"></li>
        <li>
          <p class="caption-m--regular created-date">{{ item.created_at }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Badge from "@/components/Badge";
import Icon from "@/components/Icon";
export default {
  name: 'ArticleCard',
  components: {Icon, Badge},
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>