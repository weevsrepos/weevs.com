<template>
  <div class="dropdown-menu" :class="{'opened' : opened, 'white-bg' : whiteBg}">
    <div class="label--box d-flex align-center" @click.stop="opened = !opened">
      <p :class="labelClass">{{ label }}</p>
      <Icon href="chevron-down" size="12" class="ml-14" />
    </div>

    <ul class="dropdown-menu-items" :class="{'opened' : opened}">
      <li v-for="option in options" :class="`${itemClass} ${option.href ? 'link' : ''}`">
        <template v-if="option.href">
          <template v-if="option.hrefCallback">
            <a href="#" @click.prevent="option.hrefCallback">{{ option.label }}</a>
          </template>
          <template v-else>
            <a :href="option.href">{{ option.label }}</a>
          </template>
        </template>
        <template v-else>
          {{ option.label }}
        </template>
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
    },
    whiteBg: {
      type: Boolean,
      default: false
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