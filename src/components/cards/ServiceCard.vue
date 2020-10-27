<template>
  <div class="service-card">
    <Icon :href="icon" size="20" fill="#fff" />
    <h5 class="body-m--medium title mt-18">{{ title }}</h5>
    <p class="body-m--regular description mt-10">{{ description}}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {Icon},
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>