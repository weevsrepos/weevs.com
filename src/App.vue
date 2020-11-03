<template>
  <component :is="this.$route.meta.layout || 'default'" :color="this.$route.meta.color || null">
    <router-view />
  </component>
</template>

<style lang="scss">
@import "./sass/app";
</style>