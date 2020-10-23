<template>
  <component :is="this.$route.meta.layout || 'default'">
    <router-view />
  </component>
</template>

<style lang="scss">
@import "./sass/app";
</style>