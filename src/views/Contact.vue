<template>
  <div id="hire-join-sections">
    <section class="container">
      <h1 class="heading-mobile-s--light heading-xl--light line-height-mobile-42">
        Get to know each other <br class="d-mobile-none">
        and start making value now!
      </h1>

      <section class="items">
        <section class="left--side">
          <template v-if="thankyou">
            <div class="mt-30 mt-mobile-8 position-relative">
              <span id="confettiAnimation"></span>
              <section class="d-flex justify-content-center">
                <div class="check--box align-center d-flex justify-content-center">
                  <Icon href="check" fill="#fff" size="17"/>
                </div>
              </section>

              <h2 class="heading-s--medium heading-m--medium mt-40 mb-8 text-center">Thank you</h2>
              <h5 class="body-m--regular text-center">Your message is with us. We will get back to you as soon as
                possible.</h5>

              <div class="mt-64 d-flex justify-content-center flex-mobile-column">
                <Button @click="thankyou = false" text="Send another message" type="secondary" size="lg"
                        class="flex-shrink-0 d-flex justify-content-center self-align-start self-mobile-align-stretch mr-16 mr-mobile-0 mb-mobile-16"/>

                <router-link :to="{ name: 'Home' }" class="flex-shrink-0 d-flex self-align-start self-mobile-align-stretch">
                  <Button text="Go back to homepage" size="lg"
                          class="flex-shrink-0 d-flex justify-content-center self-align-start self-mobile-align-stretch flex-1"/>
                </router-link>
              </div>
            </div>
          </template>

          <template v-else>
            <section class="tabs--contact">
              <Tabs :tabs="tabs" :dynamic-height="false" tab-class="heading-xs--regular" :margin="20" :selected-tab="activeTab">
                <template v-slot:tab-hire>
                  <HireUs @success="successCallback"/>
                </template>

                <template v-slot:tab-join>
                  <JoinUs @success="successCallback"/>
                </template>
              </Tabs>
            </section>
          </template>
        </section>

        <section class="right--side">
          <div>
            <p class="overline-s--medium text-uppercase mb-16 text-stone-gray mb-mobile-16 letter-spacing-08em">our
              location</p>
            <h2 class="heading-mobile-xs--regular heading-s--regular line-height-42">2 Sembawang Walk 757616,
              Singapore</h2>
          </div>

          <div class="mt-40 mt-mobile-32">
            <p class="overline-s--medium text-uppercase mb-16 text-stone-gray mb-mobile-16 letter-spacing-08em">Give us
              a call</p>
            <a href="tel:+65 675 3900 1" class="heading-mobile-xs--regular heading-s--regular line-height-42">
              +65 675 3900 1
            </a>
          </div>

          <div class="mt-40 mt-mobile-32">
            <p class="overline-s--medium text-uppercase mb-16 text-stone-gray mb-mobile-16 letter-spacing-08em">Email
              US</p>
            <a href="mailto:contact@weevs.com" class="heading-mobile-xs--regular heading-s--regular line-height-42">
              contact@weevs.com
            </a>
          </div>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import Button from "@/components/Button";
import {confetti} from 'dom-confetti';
import Icon from "@/components/Icon";
import Tabs from "@/components/Tabs";
import HireUs from "@/components/forms/HireUs";
import JoinUs from "@/components/forms/JoinUs";

export default {
  components: {JoinUs, HireUs, Tabs, Icon, Button},
  data() {
    return {
      thankyou: false,
      tabs: [
        { id: 'hire', title: 'Hire us' },
        { id: 'join', title: 'Join us' },
      ],
      activeTab: this.$route.hash ? this.$route.hash.replace("#", "") : 'hire',
    }
  },
  methods: {
    successCallback() {
      this.thankyou = true;
      setTimeout(() => {
        const box = document.querySelector("#confettiAnimation");
        confetti(box, {
          angle: 90,
          spread: 360,
          startVelocity: 23,
          elementCount: 200,
          dragFriction: "0.10",
          duration: 10000,
          stagger: 1,
          width: "10px",
          height: "10px",
          perspective: "500px",
          colors: ["#000", "#333", "#666"]
        });
      }, 100)
    }
  }
}
</script>

<style scoped>

</style>