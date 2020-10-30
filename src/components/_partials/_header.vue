<template>
  <header id="header" :class="{'opened-mobile' : openMobileMenu}">
    <section class="container d-flex justify-content-between align-center">
      <div class="header-left">
        <router-link to="#">
          <Icon href="weevs" fill="#000" width="102" height="16" class="logo"/>
        </router-link>
      </div>

      <div class="header-right">
        <button class="button d-flex-mobile d-desktop-none" @click="openMenu()">
          <Icon href="menu" width="18" height="16" v-if="!openMobileMenu" class="no--effect"/>
          <Icon href="close" width="18" height="16" v-else class="no--effect"/>
        </button>
        <ul id="menu">
          <li>
            <router-link to="#" class="body-s--regular body-mobile-l--regular">
              We are different
            </router-link>
          </li>
          <li class="dropdown-item">
            <Dropdown label="What we do" :options="menuItems" labelClass="body-s--regular body-mobile-l--regular"/>
          </li>
          <li>
            <router-link to="#" class="body-s--regular body-mobile-l--regular">
              Industry insights
            </router-link>
          </li>
          <li>
            <Button size="md" class="body-s--regular body-mobile-l--regular" icon="arrow-right" text="Get in touch"/>
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
      ],
      openMobileMenu: false
    }
  },
  methods: {
    openMenu() {
      this.openMobileMenu = !this.openMobileMenu;
      if(this.openMobileMenu) {
        document.body.classList.add("overlay-mobile-open");
      } else {
        document.body.classList.remove("overlay-mobile-open");
      }
    }
  }
}
</script>

<style scoped>

</style>