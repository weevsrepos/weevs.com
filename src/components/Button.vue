<template>
  <component :is="to ? 'router-link' : 'button'"
             :class="`button ${type} ${size} mobile-${mobile} ${dynamicIconSize ? 'dynamic-icon-size' : ''} ${loading ? 'show--loader' : ''}`"
             :disabled="disabled"
             :to="to"
  >
    <span class="loading-hide--text">
       <template v-if="text && !icon">
        {{ text }}
      </template>
      <template v-else>
        <slot></slot>
        <template v-if="icon">
          {{ text }}
          <Icon :href="icon" :size="iconSize" :fill="iconFill"
                :class="`${iconClass || ''} ${hideHoverEffect ? 'no--effect' : ''}`"/>
        </template>
      </template>
    </span>
  </component>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: {Icon},
  props: {
    to: {
      type: Object,
    },
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
      default: 16
    },
    mobile: {
      type: String,
      default: ''
    },
    hideHoverEffect: {
      type: Boolean,
      default: false
    },
    dynamicIconSize: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>