<template>
  <div class="publication--card">
    <router-link to="" class="no-css">
      <div class="image--box">
        <img :src="item.img" :alt="item.title"/>
        <Badge :text="item.badge" class="badge--abs"/>

        <div class="arrow">
          <Icon href="arrow-right" size="42" fill="#000"/>
        </div>
      </div>
      <div class="info--box">
        <h6 class="created--date caption-m--regular mb-16">{{ item.created_at }}</h6>
        <h3 class="title body-mobile-l--medium body-m--medium line-height-32 mb-16">{{ item.title }}</h3>
        <ul class="d-flex align-center author--box">
          <li class="w-24 h-24"><img :src="item.author.image" :alt="item.author.name"/></li>
          <li class="caption-m--regular ml-8 text-black">{{ item.author.name }}</li>
        </ul>
      </div>
    </router-link>
  </div>
</template>

<script>
import Badge from "@/components/Badge";
import Icon from "@/components/Icon";

export default {
  name: 'PublicationCard',
  components: {Icon, Badge},
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>