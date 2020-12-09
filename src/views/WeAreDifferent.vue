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
              Great engineers hire great engineers to solve problems that they understand for customers and teams that
              they empathise with.
            </h2>
          </div>
          <div class="flex-1">
            <p class="body-mobile-m--regular body-l--regular line-height-mobile-24 line-height-32">We help customers
              hire people that fulfill actual needs that are
              defined by use cases and specific gaps that
              we have helped them identify.
              <span class="d-inline-mobile d-desktop-none">
                We are not in the business of “moving peoplearound” for a
                commission.
              </span>
            </p>

            <p class="d-mobile-none body-mobile-m--regular body-l--regular line-height-mobile-24 line-height-32">We are
              not in the business of “moving peoplearound” for a
              commission.</p>

            <p class="body-mobile-m--regular body-l--regular line-height-mobile-24 line-height-32 mt-32">Weevs does hire
              recruits of resourcing partners, our team is
              made of specialists with actual proven
              experience and track record on the ground that help our customers hire people like them.</p>

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
          <p class="body-mobile-m--regular line-height-mobile-24 body-l--regular line-height-32">We believe recruiting
            is nothing but an afterthought of a team that
            has taken the time to deeply understand
            a problem statement and use the insights they have gained to match a human resource with very targeted
            needs.</p>

          <p class="body-mobile-m--regular line-height-mobile-24 body-l--regular line-height-32 mt-32">Nobody is a
            perfect match for every role, but always someone
            is perfect for aspecific use case. Our job is
            to find them!</p>

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
            <h2 class="heading-mobile-s--regular heading-l--regular">A nonsense cost model</h2>
          </div>
          <div class="mt-mobile-16">
            <p class="body-mobile-m--regular body-l--regular line-height-32 line-height-mobile-24">Our job is to help
              you - We don’t waste your time with shady
              costing models. We make money the following way</p>

            <router-link :to="{ name: 'Contact' }">
              <Button text="Get to know us" icon="arrow-right" size="lg" class="mt-32 d-mobile-none"/>
            </router-link>
          </div>
        </div>

        <div class="item first-list-item mb-160">
          <div>
            <Icon href="computer" width="30" height="24" fill="#000"/>
            <h3 class="heading-mobile-xs--regular mb-mobile-16 heading-s--regular mt-20">Professional services</h3>
          </div>

          <div>
            <p class="body-mobile-m--regular line-height-mobile-24 body-l--regular line-height-32">
              This is when we work with a customer remotely or on premiseson any of the professional services we
              provide.
              We charge by engagement on its totality or on a weekly rate basis during 5 working days.
            </p>
          </div>
        </div>

        <div class="item mb-160">
          <div>
            <Icon href="file" width="30" height="24" fill="#000"/>
            <h3 class="heading-mobile-xs--regular mb-mobile-16 heading-s--regular mt-20">Contract placement</h3>
          </div>

          <div>
            <p class="body-mobile-m--regular line-height-mobile-24 body-l--regular line-height-32">
              Our contract talent can be placed remotely or on premise basis.
              All of our contracts have a clause that allows the customer to take on the talent on a
              permanent basis. Our minimum contract commitment is 3 months, rates vary on the
              experience and role of the candidate, we bill on a monthly basis and do not charge any
              on-sign bonus to the customer.
            </p>
          </div>
        </div>

        <div class="item">
          <div>
            <Icon href="permanent-placement" width="30" height="24" fill="#000"/>
            <h3 class="heading-mobile-xs--regular mb-mobile-16 heading-s--regular mt-20">Permanent placement</h3>
          </div>

          <div>
            <p class="body-mobile-m--regular line-height-mobile-24 body-l--regular line-height-32">
              Our problem statement analysis is provided upfront free of charge to the customer. We will charge 20% of
              the
              candidate's first-year salary for our placement services.
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