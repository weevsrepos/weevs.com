<template>
  <header id="header" :class="{'opened-mobile' : openMobileMenu, 'bg-beige' : color === 'beige', 'bg-light-gray' : color === 'light-gray'}">
    <section class="container d-flex justify-content-between align-center">
      <div class="header-left">
        <a @click="changeRoute({ name: 'Home' })" class="c-pointer">
          <Icon href="weevs" fill="#000" width="102" height="16" class="logo"/>
        </a>
      </div>

      <div class="header-right">
        <button class="button d-flex-mobile d-desktop-none" @click="openMenu()">
          <Icon href="menu" width="18" height="16" v-if="!openMobileMenu" class="no--effect"/>
          <Icon href="close" width="18" height="16" v-else class="no--effect"/>
        </button>
        <ul id="menu">
          <li>
            <a @click="changeRoute({ name: 'WeAreDifferent' })" class="body-s--regular body-mobile-l--regular c-pointer">
              We are different
            </a>
          </li>
          <li class="dropdown-item">
            <Dropdown label="What we do"
                      :options="menuItems"
                      label-class="body-s--regular body-mobile-l--regular"
                      item-class="body-mobile-m--regular"
                      :white-bg="color === 'light-gray'"
            />
          </li>
          <li>
            <a @click="changeRoute({ name: 'Insights' })" class="body-s--regular body-mobile-l--regular c-pointer">
              Industry insights
            </a>
          </li>
          <li>
            <a @click="changeRoute({ name: 'Contact' })" class="c-pointer">
              <Button size="md" class="body-s--regular body-mobile-m--regular" icon="arrow-right" text="Get in touch"/>
            </a>
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
  props: ['color'],
  data() {
    return {
      menuItems: [
        {
          label: 'Plan',
          href: '/#plan',
          hrefCallback: () => {
            this.changeRoute("/#plan")
          }
        },
        {
          label: 'Build',
          href: '/#build',
          hrefCallback: () => {
            this.changeRoute("/#build")
          }
        },
        {
          label: 'Run',
          href: '/#run',
          hrefCallback: () => {
            this.changeRoute("/#run")
          }
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
    },
    changeRoute(route) {
      this.openMobileMenu = false;
      document.body.classList.remove("overlay-mobile-open");
      this.$router.push(route);
    }
  }
}
</script>

<style scoped>

</style>