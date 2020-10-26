<template>
  <div class="badge overline-s--medium">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    text: {
      type: String
    }
  }
}
</script>