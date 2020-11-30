<template>
  <section :class="`tabs margin-${margin}`" :id="id" >
    <section class="tabs--headline">
      <div v-for="(tab, key) in tabs"
           :key="key"
           :class="`${ tab.id === selected ? 'active' : ''}`"
           @click="changeTab(key, tab.id)"
      >
        <h2 :class="`${tabClass ? tabClass: 'heading-mobile-xs--regular heading-m--regular'}`">{{ tab.title }}</h2>
      </div>
    </section>

    <section class="tab-contents" :style="{ height: dynamicHeight ? `${height}px` : 'unset' }">
      <section class="tab-content clearfix" :style="{ width : `${fullWidth}px`, transform: `translateX(-${transform}px)`}">
        <section :id="tab.id" v-for="(tab, key) in tabs"
                 :key="key"
                 :class="`${ tab.id === selected ? 'active' : ''}`"
                 :style="{ width: `${windowWidth}px`, marginRight: `${margin}px` }"
        >
          <slot :name="`tab-${tab.id}`"></slot>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true
    },
    tabClass: {
      type: String,
      default: ''
    },
    selectedTab: {
      type: [String, Number],
      default: null
    },
    dynamicHeight: {
      type: Boolean,
      default: true
    },
    margin: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      selected: this.selectedTab || this.tabs[0].id,
      windowWidth: 0,
      height: 0,
      fullWidth: 0,
      transform: 0,
      id: `tabs-${Math.floor(Math.random() * 1000)}`
    }
  },
  mounted() {
    window.addEventListener('resize', this.initTabSizes);
    this.initTabSizes();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.initTabSizes);
  },
  methods: {
    initTabSizes() {
      this.$nextTick(() => {
        let innerWidth = document.querySelector(`#${this.id}`).offsetWidth
        let paddings = window.innerWidth < 1024 ? -16: 0;
        this.windowWidth = innerWidth - paddings;
        this.fullWidth = this.tabs.length * window.innerWidth;
        setTimeout(() => {
          this.height = document.getElementById(this.selected).offsetHeight;
          let index = this.tabs.findIndex((i) =>  i.id === this.selected);
          this.changeTab(index, this.selected);
        }, 100)
      })
    },
    changeTab(index, id) {
      this.selected = id;
      this.transform = index * this.windowWidth + (this.margin * index);
      this.height = document.getElementById(id).offsetHeight;
    }
  }
}
</script>

<style scoped>

</style>