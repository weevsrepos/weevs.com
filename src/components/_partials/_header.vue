<template>
  <header id="header">
    <section class="container d-flex justify-content-between align-center">
      <div class="header-left">
        <router-link to="#">
          <Icon href="weevs" fill="#000" width="102" height="16"/>
        </router-link>
      </div>

      <div class="header-right">
        <ul id="menu">
          <li>
            <router-link to="#">
              We are different
            </router-link>
          </li>
          <li>
            <router-link to="#" class="d-flex align-center">
              What we do
              <Icon href="chevron-down" class="ml-14"/>
            </router-link>
          </li>
          <li>
            <router-link to="#">
              Industry insights
            </router-link>
          </li>
          <li>
            <Button size="md">
              Get in touch
              <Icon href="arrow-right"/>
            </Button>
          </li>
        </ul>
      </div>
    </section>
  </header>
</template>

<script>
import Icon from "@/components/Icon";
import Button from "@/components/Button";
export default {
  components: {Button, Icon}
}
</script>

<style scoped>

</style>