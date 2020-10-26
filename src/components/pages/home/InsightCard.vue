<template>
  <div class="insight-item">
    <img :src="item.img" class="main-image" alt=""/>

    <Badge :text="item.badge" class="mt-24 mb-16"/>

    <h2 class="heading-s--medium mb-24 pr-30">
      {{ item.title }}
    </h2>

    <div>
      <ul class="d-flex align-center">
        <li>
          <ul class="d-flex align-center">
            <li><img :src="item.author.image" /></li>
            <li class="caption-m--regular ml-8">{{ item.author.name }}</li>
          </ul>
        </li>
        <li class="ml-22">
          <p class="caption-m--regular created-date">{{ item.created_at }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Badge from "@/components/Badge";
export default {
  name: 'InsightCard',
  components: {Badge},
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