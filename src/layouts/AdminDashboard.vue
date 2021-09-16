<template>
  <section class="d-flex" id="admin--dashboard">
    <aside class="admin--sidebar">
      <router-link class="logo" :to="{ name: 'AdminDashboard' }">
        <Icon href="weevs" fill="#000" width="102" height="16" class="logo"/>
      </router-link>

      <ul class="menu--items">
        <li class="mb-20">Manage</li>
        <li>
          <router-link :to="{ name: 'AdminPublications' }" class="d-flex align-center" active-class="active">
            <Icon href="computer" fill="#000" class="mr-10" />
            Publications
          </router-link>
        </li>
      </ul>
    </aside>
    <section class="admin--content">
      <slot></slot>
    </section>
  </section>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {Icon}
}
</script>

<style scoped>

</style>
