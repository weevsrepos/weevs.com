<template>
  <button :class="`button ${type} ${size}`" :disabled="disabled">
    <template v-if="text && !icon">
      {{ text }}
    </template>
    <template v-else>
      <slot></slot>
      <template v-if="icon">
        {{ text }}
        <Icon :href="icon" :size="iconSize" :fill="iconFill" />
      </template>
    </template>
  </button>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {Icon},
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    text: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'md'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    iconFill: {
      type: String
    },
    iconSize: {
      type: [String, Number]
    }
  }
}
</script>