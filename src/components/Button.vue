<template>
  <button :class="`button ${type} ${size} mobile-${mobile}`" :disabled="disabled">
    <template v-if="text && !icon">
      {{ text }}
    </template>
    <template v-else>
      <slot></slot>
      <template v-if="icon">
        {{ text }}
        <Icon :href="icon" :size="iconSize" :fill="iconFill" :class="`${iconClass} ${hideHoverEffect ? 'no--effect' : ''}`"/>
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
    iconClass: {
      type: String
    },
    iconFill: {
      type: String
    },
    iconSize: {
      type: [String, Number],
      default: 11
    },
    mobile: {
      type: String
    },
    hideHoverEffect: {
      type: Boolean,
      default: false
    },
  }
}
</script>