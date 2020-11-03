<template>
  <Header :color="color" />
  <slot></slot>
  <Footer />
</template>

<script>
import Header from "@/components/_partials/_header";
import Footer from "@/components/_partials/_footer";

export default {
  components: {
    Header, Footer
  },
  props: ['color']
}
</script>

<style scoped>

</style>