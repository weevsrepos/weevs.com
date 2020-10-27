<template>
  <div class="testimonial-block">
    <h2 class="heading-l--light" v-html="item.text"></h2>

    <div class="author-block d-flex align-center">
      <div class="image">
        <img :src="item.author.image" :alt="item.author.name" />
      </div>
      <div class="ml-20">
        <p class="body-m--medium mb-4">{{ item.author.name }}</p>
        <ul class="d-flex navigation">
          <li class="text-uppercase caption-m--regular text-black">ceo</li>
          <li class="dot text-black"></li>
          <li class="caption-m--regular text-black">Weevs</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonials",
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