<template>
  <footer id="footer">
    <section class="top-footer d-flex justify-content-center align-center flex-column">
      <h2 class="heading-mobile-s--light heading-xl--light line-height-mobile-42">
        Fill in your gap with best specialists <br> in the industry
      </h2>
      <Button text="Get in touch" icon="arrow-right" type="secondary" class="mt-48 mt-mobile-40 b-none" size="lg"/>
    </section>
    <section class="bottom-footer">
      <section class="container">
        <section id="menu-footer" class="d-flex justify-content-between flex-mobile-column">
          <div>
            <div>
              <router-link to="#">
                <Icon href="weevs" fill="#fff" width="102" height="16"/>
              </router-link>
            </div>
            <div class="mt-44 mt-mobile-24">
              <h4 class="body-mobile-l--light heading-xs--light line-height-mobile-24">We become your team <br> or help you build one</h4>
            </div>
            <div class="mt-44 mt-mobile-35 d-flex align-center social-icons">
              <router-link to="#">
                <Icon href="linkedin" size="20"/>
              </router-link>
              <router-link to="#" class="ml-37 ml-mobile-27">
                <Icon href="facebook" size="20"/>
              </router-link>
              <router-link to="#" class="ml-37 ml-mobile-27">
                <Icon href="twitter" size="20"/>
              </router-link>
              <router-link to="#" class="ml-37 ml-mobile-27">
                <Icon href="instagram" size="20"/>
              </router-link>
            </div>
          </div>


          <section class="d-flex right--footer mt-mobile-42">
            <div class="list-items">
              <h3 class="body-mobile-l--medium heading-xs--medium">What we do</h3>
              <ul class="mt-24 mt-mobile-16">
                <li>
                  <router-link to="" class="body-m--regular">
                    Plan
                  </router-link>
                </li>
                <li class="mt-24 mt-mobile-16">
                  <router-link to="" class="body-m--regular">
                    Build
                  </router-link>
                </li>
                <li class="mt-24 mt-mobile-16">
                  <router-link to="" class="body-m--regular">
                    Run
                  </router-link>
                </li>
              </ul>
            </div>

            <div class="list-items">
              <h3 class="body-mobile-l--medium heading-xs--medium">Insights</h3>
              <ul class="mt-24 mt-mobile-16">
                <li>
                  <router-link to="" class="body-m--regular">
                    Case studies
                  </router-link>
                </li>
                <li class="mt-24 mt-mobile-16">
                  <router-link to="" class="body-m--regular">
                    Publications
                  </router-link>
                </li>
                <li class="mt-24 mt-mobile-16">
                  <router-link to="" class="body-m--regular">
                    Shows
                  </router-link>
                </li>
                <li class="mt-24 mt-mobile-16">
                  <router-link to="" class="body-m--regular">
                    Blog
                    <Icon href="external-link" size="12" class="ml-8"/>
                  </router-link>
                </li>
              </ul>
            </div>

            <div class="list-items">
              <h3 class="body-mobile-l--medium heading-xs--medium">Company</h3>
              <ul class="mt-24 mt-mobile-16">
                <li>
                  <router-link to="" class="body-m--regular">
                    We are different
                  </router-link>
                </li>
                <li class="mt-24 mt-mobile-16">
                  <router-link :to="{ name: 'Contact' }" class="body-m--regular">
                    Careers
                  </router-link>
                </li>
              </ul>
            </div>

            <div class="list-items">
              <h3 class="body-mobile-l--medium heading-xs--medium">Contact</h3>
              <ul class="mt-24 mt-mobile-16">
                <li>
                  <router-link :to=" { name: 'Contact' } " class="body-m--regular">
                    Get in touch
                  </router-link>
                </li>
              </ul>
            </div>
          </section>

        </section>
      </section>
    </section>

    <section class="copyright-section">
      <section class="container d-flex justify-content-between align-center">
        <p class="caption-m--regular copyright d-flex flex-1">&copy; {{ year }} Weevs.</p>
        <p class="caption-m--regular d-flex align-center flex-1 justify-content-center">
          Made with
          <Icon href="heart" size="13" fill="#fff" class="mx-7"/>
          from <span class="caption-m--medium">&nbsp;Singapore</span>
        </p>
        <ul class="d-flex flex-1 justify-content-end">
          <li>
            <router-link :to="{ name: 'Terms' }" class="copyright caption-m--regular">
              Terms <span class="disable-font-feature">&</span> Conditions
            </router-link>
          </li>
          <li class="ml-32">
            <router-link :to="{ name: 'Privacy' }" class="copyright  caption-m--regular">
              Privacy Policy
            </router-link>
          </li>
        </ul>
      </section>
    </section>
  </footer>
</template>

<script>
import Button from "@/components/Button";
import Icon from "@/components/Icon";
export default {
  components: {Icon, Button},
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>

</style>