<template>
  <svg :fill="fill" :width="width || size" :height="height || size">
    <use :xlink:href="`/img/icons/icon-sprite.svg#${href}`" :fill="fill"></use>
  </svg>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    },
    fill: {
      type: String
    },
    size: {
      type: [Number, String],
      default: 16
    },
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    },
  }
}
</script>

<style scoped>

</style>