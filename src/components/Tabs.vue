<template>
  <section class="tabs">
    <section class="tabs--headline">
      <div v-for="(tab, key) in tabs"
           :key="key"
           :class="`${ tab.id === selected ? 'active' : ''}`"
           @click="changeTab(key, tab.id)"
      >
        <h2 class="heading-mobile-xs--regular heading-m--regular">{{ tab.title }}</h2>
      </div>
    </section>

    <section class="tab-contents" :style="{ height: `${height}px` }">
      <section class="tab-content clearfix" :style="{ width : `${fullWidth}px`, transform: `translateX(-${transform}px)`}">
        <section :id="tab.id" v-for="(tab, key) in tabs"
                 :key="key"
                 :class="`${ tab.id === selected ? 'active' : ''}`"
                 :style="{ width: `${windowWidth}px` }"
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
    selectedTab: {
      type: [String, Number],
      default: null
    }
  },
  data() {
    return {
      selected: this.selectedTab || this.tabs[0].id,
      windowWidth: 0,
      height: 0,
      fullWidth: 0,
      transform: 0
    }
  },
  mounted() {
    window.addEventListener('resize', this.initTabSizes);
    this.initTabSizes();
  },
  methods: {
    initTabSizes() {
      let paddings = window.innerWidth < 1024 ? 0: 160;
      this.windowWidth = window.innerWidth - paddings;
      this.fullWidth = this.tabs.length * window.innerWidth;
      setTimeout(() => {
        this.height = document.getElementById(this.selected).offsetHeight;
        let index = this.tabs.findIndex((i) =>  i.id === this.selected);
        this.changeTab(index, this.selected);
      }, 100)
    },
    changeTab(index, id) {
      this.selected = id;
      this.transform = index * this.windowWidth;
      this.height = document.getElementById(id).offsetHeight;
    }
  }
}
</script>

<style scoped>

</style>