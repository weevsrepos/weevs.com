<template>
  <section id="we-are-different-welcome-section">
    <section class="container pb-80 pb-mobile-64">
      <h1 class="heading-mobile-s--light heading-xl--light heading-mobile-s--light">
        Not just recruiting specialists,
        we are matching them!
      </h1>
    </section>

    <section class="welcome-bottom">
      <section class="container position-relative">
        <span class="quote">“</span>
        <section class="d-flex items">
          <div class="flex-1">
            <h2 class="heading-m--light heading-mobile-xs--light line-height-mobile-36">
              Our company has no permanent employees, it’s not focused on profit, contributors give us their time completely pro-bono out of sheer will to contribute.
            </h2>
          </div>
          <div class="flex-1">
            <p class="body-mobile-m--regular body-l--regular line-height-mobile-24 line-height-32">
              We provide a venue for highly technical people to contribute and help companies in <span class="body-mobile-m--medium body-l--medium">ASEAN</span> become World
              Class technology organisations. We focus especially on startups and small businesses that do not have the
              scale or capital to bring in-house all the expertise they need at a point in time.
            </p>

            <p class="body-mobile-m--regular body-l--regular line-height-mobile-24 line-height-32 mt-32">
              Our ultimate mission is to help advance the standard of engineering and technology in the <span class="body-mobile-m--medium body-l--medium">ASEAN</span> region. We
              want to help create a community in the technology space that is inclusive and focused on quality and
              engineering excellence.
            </p>

            <router-link :to="{ name: 'Contact' }">
              <Button text="Get to know us" icon="arrow-right" size="lg" class="mt-32 mt-mobile-40"
                      mobile="md"/>
            </router-link>
          </div>
        </section>
      </section>
    </section>
  </section>

  <section id="operations">
    <section class="container">
      <p class="overline-s--medium text-uppercase mb-32 text-stone-gray mb-mobile-16 letter-spacing-08em">operations</p>

      <section class="mt-32 mt-mobile-0 d-flex flex-mobile-column heading">
        <div>
          <h2 class="heading-l--regular heading-mobile-s--regular">An unique methodology: GDR</h2>
        </div>
        <div class="mt-mobile-16">
          <p class="body-mobile-m--regular line-height-mobile-24 body-l--regular line-height-32">
            Gap driven resourcing is about looking at capability needs from a problem statement perspective, identifying
            2 key perspectives: Technical skills, and personal traits. Companies hire highly talented people to improve
            execution but often forget that teams are not just made of people with certain skills but also a balance of
            interpersonal skills that need to blend together.
          </p>

          <p class="body-mobile-m--regular line-height-mobile-24 body-l--regular line-height-32 mt-32">
            We help companies work through their use cases and identify the current baseline for both perspectives and
            we help fill gaps with people that fit the customers needs.
          </p>

          <router-link :to="{ name: 'Contact' }">
            <Button text="Find out more" icon="arrow-right" type="secondary" size="lg" class="mt-32 d-mobile-none b-none"/>
          </router-link>
        </div>
      </section>

      <section class="vector--section">
        <img src="/img/gdr-vector.svg" class="d-mobile-none"/>
        <img src="/img/gdr-vector-mobile.svg" class="d-mobile-block d-desktop-none"/>

        <div class="info">
          <div class="candidate">
            <p class="overline-s--medium">candidate</p>
          </div>
          <div class="task-scope mt-mobile-16 mt-32">
            <p class="overline-s--medium">Task Scope</p>
          </div>
          <div class="match mt-mobile-16 mt-32">
            <p class="overline-s--medium">Match</p>
          </div>
        </div>
      </section>

      <router-link :to="{ name: 'Contact' }">
        <Button text="Find out more" icon="arrow-right" type="secondary" size="lg"
                class="mt-mobile-40 mt-32 d-mobile-block d-desktop-none" mobile="md"/>
      </router-link>
    </section>
  </section>

  <section id="operations-bottom">
    <section class="container">
      <p class="overline-s--medium text-uppercase mb-32 text-stone-gray mb-mobile-16 letter-spacing-08em">operations</p>

      <section class="items mt-32 mt-mobile-0">
        <div class="item headline">
          <div>
            <h2 class="heading-mobile-s--regular heading-l--regular">Eligible organisations</h2>
          </div>
          <div class="mt-mobile-16">
            <p class="body-mobile-m--regular body-l--regular line-height-32 line-height-mobile-24">
              We support organisations that circumstantially do not have access to expertise that they need to grow
              their business.
            </p>

            <router-link :to="{ name: 'Contact' }">
              <Button text="Get to know us" icon="arrow-right" size="lg" class="mt-32 d-mobile-none"/>
            </router-link>
          </div>
        </div>

        <div class="item first-list-item mb-160">
          <div>
            <Icon href="computer" width="30" height="24" fill="#000"/>
            <h3 class="heading-mobile-xs--regular mb-mobile-16 heading-s--regular mt-20">Start-ups and SMEs</h3>
          </div>

          <div>
            <p class="body-mobile-m--regular line-height-mobile-24 body-l--regular line-height-32">
              Weev’s helps start-ups and SMEs at any stage of growth and investment, solving technical problems on the
              ground, challenges around strategy, recruitment and culture.
            </p>
          </div>
        </div>

        <div class="item mb-160">
          <div>
            <Icon href="file" width="30" height="24" fill="#000"/>
            <h3 class="heading-mobile-xs--regular mb-mobile-16 heading-s--regular mt-20">Non-profit organizations</h3>
          </div>

          <div>
            <p class="body-mobile-m--regular line-height-mobile-24 body-l--regular line-height-32">
              We support registered non profit organisations in the ASEAN region.This also includes government lead
              initiatives that focus on causes that we have selected to support.
            </p>
          </div>
        </div>

        <div class="item">
          <div>
            <Icon href="permanent-placement" width="30" height="24" fill="#000"/>
            <h3 class="heading-mobile-xs--regular mb-mobile-16 heading-s--regular mt-20">Our value system</h3>
          </div>

          <div>
            <p class="body-mobile-m--regular line-height-mobile-24 body-l--regular line-height-32">
              We believe that at the core of everything that we do there needs to be transparency, honesty and good will
              that will help us deliver great work. Our collaborators believe that doing things the right way is as
              important as what we do. Being kind, compassionate, thoughtful and respectful to those around us is a
              fundamental part of our value system.
            </p>
            <p class="body-mobile-m--regular line-height-mobile-24 body-l--regular line-height-32">
              Our contributors hold these values, and to us, values are not negotiable - they stand firm in the face of
              challenges, bad days, success and failure.
            </p>
          </div>
        </div>

      </section>

      <router-link :to="{ name: 'Contact' }">
        <Button text="Get to know us" icon="arrow-right" size="lg" class="mt-40 d-mobile-block d-desktop-none"
                mobile="md"/>
      </router-link>
    </section>
  </section>


  <section id="our-core">
    <section class="container items">
      <section class="left-side">
        <p class="overline-s--medium text-uppercase mb-32 text-stone-gray mb-mobile-16 letter-spacing-08em">Our core</p>

        <h2 class="heading-mobile-s--regular heading-l--regular mt-32 mt-mobile-0 line-height-mobile-42">
          Deployment of empathy
        </h2>

        <p class="body-mobile-m--regular mt-mobile-16 mt-64 body-l--regular line-height-32 line-height-mobile-24">
          We find people that share the same values that we do as an organization, and empathy is one of our key pillars
          and we use it to gain a deeper understanding of our customers' needs, what drives them and what are the very
          difficult challenges that they face that we can help with.
        </p>

        <p class="body-mobile-m--regular line-height-mobile-24 mt-mobile-16 mt-32 body-l--regular line-height-32">
          Empathy cannot be faked, weaponized or leveraged, we use to keep us in check and remind is that we only exist
          for as long as we listen, understand and wish to give back and contribute, this is practical and in the long
          run
          the only sustainable way to keep a company like ours in business.
        </p>
      </section>
      <section class="right-side">
        <p class="overline-s--medium text-uppercase mb-32 text-stone-gray mb-mobile-16 letter-spacing-08em">LInkedin</p>
        <h2 class="heading-mobile-s--regular heading-l--regular mt-32 line-height-mobile-42 mt-mobile-0">
          Connect with our founder
        </h2>

        <div class="author-block d-flex align-center mt-64 mt-mobile-40">
          <div class="image">
            <img src="/img/avatar_big.png" alt="Pedro Sttau" width="90" height="90"/>
          </div>
          <div class="ml-32 ml-mobile-32">
            <p class="body-m--medium mb-4">Pedro Sttau</p>
            <ul class="d-flex navigation">
              <li class="text-uppercase caption-m--regular text-black">ceo</li>
              <li class="dot text-black"></li>
              <li class="caption-m--regular text-black">Weevs</li>
            </ul>
          </div>
        </div>

        <div class="find-me mt-32">
          <p class="overline-s--medium mb-16 mb-mobile-8 letter-spacing-08em">Find me on</p>

          <a href="https://my.linkedin.com/in/pedrosttau" target="_blank" class="heading-xs--regular">LinkedIn</a>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import Button from "@/components/Button";
import Icon from "@/components/Icon";

export default {
  components: {Icon, Button}
}
</script>

<style scoped>

</style>
