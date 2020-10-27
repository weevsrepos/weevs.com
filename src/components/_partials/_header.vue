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
            <Dropdown label="What we do" :options="menuItems" labelClass="body-s--regular"/>
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
import Dropdown from "@/components/Dropdown";
export default {
  components: {Dropdown, Button, Icon},
  data() {
    return {
      menuItems: [
        {
          label: 'Plan',
        },
        {
          label: 'Build',
        },
        {
          label: 'Run'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>