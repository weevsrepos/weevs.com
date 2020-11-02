<template>
  <div class="dropdown-menu" :class="{'opened' : opened}">
    <div class="label--box d-flex align-center" @click.stop="opened = !opened">
      <p :class="labelClass">{{ label }}</p>
      <Icon href="chevron-down" size="12" class="ml-14" />
    </div>

    <ul class="dropdown-menu-items" :class="{'opened' : opened}">
      <li v-for="option in options" :class="`${itemClass}`">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: 'Dropdown',
  components: {Icon},
  props: {
    label: {
      type: String,
      required: true
    },
    labelClass: {
      type: String,
      default: ''
    },
    itemClass: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      opened: false
    }
  },
  methods: {
    outsideClick() {
      this.opened = false;
    }
  },
  created() {
    document.addEventListener('click', this.outsideClick)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.outsideClick)
  }
}
</script>

<style scoped>

</style>