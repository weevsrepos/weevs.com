<template>
  <section id="welcome-section">
    <section class="container">
      <h1 class="heading-mobile-s--light heading-xl--light">
        We are a <span class="heading-mobile-s--medium heading-l--medium">Pro-bono</span> community of <span class="heading-mobile-s--medium heading-l--medium">ASEAN</span> technologists
        driven by the desire to contribute with knowledge
        and time to help advance the industry in the region.
      </h1>

      <a href="#" v-scroll-to="'#recruit-section'">
        <Button size="lg" mobile="md" icon="arrow-down" text="Get to know us better" class="mt-55 mt-mobile-40" icon-class="down"/>
      </a>
    </section>
  </section>

  <section id="recruit-section">
    <section class="container">
      <p class="overline-s--medium text-uppercase mb-32 mb-mobile-16 letter-spacing-08em">Areas of expertise</p>
      <Tabs :tabs="tabs" :selected-tab="activeTab" :key="updateKeyIndex" :margin="5">
        <template v-slot:tab-plan>
          <section>
            <div class="d-flex justify-content-between flex-mobile-column">
              <h2 class="flex-1 heading-mobile-xs--regular heading-l--regular mr-32 width-50 line-height-64 line-height-mobile-36">
                Agile does not remove the need for planning, it just reduces the effort needed.
              </h2>

              <div class="flex-1 width-50 mt-mobile-16">
                <h4 class="body-mobile-m--regular body-l--regular mb-mobile-0 mb-32 mr-mobile-16 line-height-32 line-height-mobile-24">
                  Planning properly is about understanding the problem very early in the process and having the knowledge and ability to apply different techniques to increase
                </h4>

                <h4 class="body-mobile-m--regular body-l--regular mb-mobile-0 mb-32 mr-mobile-16 line-height-32 line-height-mobile-24">
                  Proper planning requires understanding the problem early in the process, and having the knowledge and ability to apply different techniques to increase ...
                </h4>

                <div class="d-flex d-mobile-none">
                  <router-link :to="{ name: 'WeAreDifferent' }">
                    <Button text="Read more details" icon="arrow-right" type="secondary" size="lg"/>
                  </router-link>
                  <router-link :to="{ name: 'Contact' }">
                    <Button text="Get in touch" icon="arrow-right" class="ml-16" size="lg"/>
                  </router-link>
                </div>
              </div>
            </div>

            <div class="cards mt-mobile-32 pb-mobile-20">
              <ServiceCard v-for="(card, key) in tabsContents.plan.cards"
                           :icon="card.icon"
                           :title="card.title"
                           :description="card.description"
                           :key="key"
                           class="flex-1 d-flex flex-column"
              />
            </div>

            <div class="d-flex d-desktop-none mt-mobile-20">
              <router-link :to="{ name: 'WeAreDifferent' }">
                <Button text="Read more details" icon="arrow-right" size="lg" mobile="md" />
              </router-link>
            </div>
          </section>
        </template>

        <template v-slot:tab-build>
          <section>
            <div class="d-flex justify-content-between flex-mobile-column">
              <h2 class="flex-1 heading-mobile-xs--regular heading-l--regular mr-32 width-50 line-height-64 line-height-mobile-36">
                Engineering without automation is like building a skyscraper with glue.
              </h2>

              <div class="flex-1 width-50 mt-mobile-16">
                <h4 class="body-mobile-m--regular body-l--regular mb-32 mb-mobile-0 mr-mobile-16 line-height-32 line-height-mobile-24">
                  We look at the build process not as an isolated stage, but as an integrated process. It is impossible to devise from strategy, planning all the way to the end product.
                </h4>

                <div class="d-flex d-mobile-none">
                  <router-link :to="{ name: 'WeAreDifferent' }">
                    <Button text="Read more details" icon="arrow-right" type="secondary" size="lg"/>
                  </router-link>
                  <router-link :to="{ name: 'Contact' }">
                    <Button text="Get in touch" icon="arrow-right" class="ml-16" size="lg"/>
                  </router-link>
                </div>
              </div>
            </div>

            <div class="cards mt-mobile-32 pb-mobile-20">
              <ServiceCard v-for="(card, key) in tabsContents.build.cards"
                           :icon="card.icon"
                           :title="card.title"
                           :description="card.description"
                           :key="key"
              />
            </div>

            <div class="d-flex d-desktop-none mt-mobile-20">
              <router-link :to="{ name: 'WeAreDifferent' }">
                <Button text="Read more details" icon="arrow-right" size="lg" mobile="md" />
              </router-link>
            </div>
          </section>
        </template>

        <template v-slot:tab-run>
          <section>
            <div class="d-flex justify-content-between flex-mobile-column">
              <h2 class="flex-1 heading-mobile-xs--regular heading-l--regular mr-32 width-50 line-height-64 line-height-mobile-36">
                Infrastructure and code can no longer be taught in isolation.
              </h2>

              <div class="flex-1 width-50 mt-mobile-16">
                <h4 class="body-mobile-m--regular body-l--regular mb-32 mb-mobile-0 mr-mobile-16 line-height-32 line-height-mobile-24">
                  Not only because of We are aware that technical aspects are only the tip of the iceberg. Our people are not only highly qualified but we also are on the same wavelength. Development process is a long run, so you will need a great team.
                </h4>

                <div class="d-flex d-mobile-none">
                  <router-link :to="{ name: 'WeAreDifferent' }">
                    <Button text="Read more details" icon="arrow-right" type="secondary" size="lg"/>
                  </router-link>
                  <router-link :to="{ name: 'Contact' }">
                    <Button text="Get in touch" icon="arrow-right" class="ml-16" size="lg"/>
                  </router-link>
                </div>
              </div>
            </div>

            <div class="cards mt-mobile-32 pb-mobile-20">
              <ServiceCard v-for="(card, key) in tabsContents.run.cards"
                           :icon="card.icon"
                           :title="card.title"
                           :description="card.description"
                           :key="key"
              />
            </div>

            <div class="d-flex d-desktop-none mt-mobile-20">
              <router-link :to="{ name: 'WeAreDifferent' }">
                <Button text="Read more details" icon="arrow-right" size="lg" mobile="md" />
              </router-link>
            </div>
          </section>
        </template>
      </Tabs>
    </section>
  </section>

  <section id="featured-client">
    <section class="container">
      <section class="top--featured">
        <p class="overline-s--medium text-uppercase mb-32 mb-mobile-16 letter-spacing-08em">Featured client</p>

        <div class="d-flex justify-content-between flex-mobile-column">
          <h2 class="flex-1 heading-mobile-s--regular heading-l--regular mr-32 width-50 line-height-64 line-height-mobile-42">
            <span class="heading-mobile-s--medium heading-l--medium">Qerra: </span> Remote working
          </h2>

          <div class="flex-1 width-50 mt-mobile-16">
            <h4 class="body-mobile-m--regular body-l--regular mb-32 line-height-32 line-height-mobile-24">
              We are working on a POC of a SAAS platform that will support the next generation of communication for
              distributed workforces across the World. We want Qerra to provide a suite of remote engagement tools that
              will combine video, streaming and annotations in a way that will show a different perspective on how
              people express themselves in a way that is more native and less abrasive.
            </h4>

            <div class="d-flex">
              <router-link :to="{ name: 'Insights', hash: '#case-studies'}">
                <Button text="Read case study" icon="arrow-right" type="secondary" size="lg" mobile="md" class="b-none"/>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </section>
  </section>

  <section id="articles">
    <section class="container">
      <p class="overline-s--medium text-uppercase mb-32 text-stone-gray mb-mobile-16 letter-spacing-08em">insights</p>

      <div class="d-flex justify-content-between flex-mobile-column">
        <h2 class="flex-1 heading-mobile-s--regular heading-l--regular mr-32 width-50 line-height-64 line-height-mobile-42">
          Leverage our knowledge
        </h2>

        <div class="flex-1 width-50 mt-mobile-16">
          <h4 class="body-mobile-m--regular mb-mobile-0 body-l--regular mb-32 line-height-32 line-height-mobile-24">Dive deeper into our past projects and new learnings. We are openly sharing knowledge.</h4>

          <div class="d-flex d-mobile-none">
            <router-link :to="{ name: 'Insights' }">
              <Button text="Read all insights" icon="arrow-right" size="lg" mobile="md"/>
            </router-link>
          </div>
        </div>
      </div>


      <section class="article-cards">
        <ArticleCard v-for="article in articles" :item="article" />
      </section>

      <div class="d-flex d-desktop-none mt-20">
        <router-link :to="{ name: 'Insights' }">
          <Button text="Read all insights" icon="arrow-right" size="lg" mobile="md"/>
        </router-link>
      </div>
    </section>
  </section>

  <section id="testimonials">
    <section class="container position-relative">
      <span class="quote">“</span>
      <swiper
          :slides-per-view="1"
          :space-between="0"
          @swiper="setControlledSwiper"
          @slideChange="onSlideChange"
      >
        <swiper-slide v-for="testimonial in testimonials">
          <Testimonials :item="testimonial"/>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="dots">
          <span v-for="(value, index) in testimonials"
                @click="moveTo(index)"
                :class="{'active' : testimonialsCarouselIndex === index}"></span>
      </div>
    </section>
  </section>
</template>

<script>
import Button from "@/components/Button";
import Tabs from "@/components/Tabs";
import ServiceCard from "@/components/cards/ServiceCard";
import Badge from "@/components/Badge";
import ArticleCard from "@/components/cards/ArticleCard";
import { Swiper, SwiperSlide } from 'swiper/vue';
import Testimonials from "@/components/cards/Testimonials";
// Import Swiper styles
import 'swiper/swiper.scss';

export default {
  name: 'Home',
  components: {Testimonials, ServiceCard, ArticleCard, Badge, Tabs, Button, Swiper, SwiperSlide },
  data() {
    return {
      testimonialsCarouselIndex: 0,
      tabs: [
        { id: 'plan', title: 'Plan' },
        { id: 'build', title: 'Build' },
        { id: 'run', title: 'Run' },
      ],
      tabsContents: {
        plan: {
          cards: [
            {
              icon: 'tech-strategic',
              title: 'Tech Strategic Steering',
              description: 'Establish a clear use case driven strategy that is easy to articulate and understand for your Business and Engineering audience.'
            },
            {
              icon: 'agile',
              title: 'Agile and Scrum',
              description: 'Shift delivery from big bang releases to short iterative cycles that are use case and value driven.'
            },
            {
              icon: 'product-manage',
              title: 'Product Management',
              description: 'Begin with the user experience, work your way to the technology, manage user problems all the way from statement to release.'
            },
            {
              icon: 'delivery-manage',
              title: 'Delivery Management',
              description: 'Break down user cases into epics, stories and tasks that engineers can pick up, understand and deliver in small iterations.'
            }
          ]
        },
        build: {
          cards: [
            {
              icon: 'software-eng',
              title: 'Software Engineering',
              description: 'Build world class software that scales, welcomes change and is difficult to break using modern stack technologies that are fun to work with..'
            },
            {
              icon: 'solution-arch',
              title: 'Solutions Architecture',
              description: 'Design your software on a solid foundation that is driven by architecture principles that ensure quality, scalability, performance and stability.'
            },
            {
              icon: 'ai-machine',
              title: 'AI & Machine Learning',
              description: 'Gain actionable insights that allow you to build products and services that add value to customers.'
            },
            {
              icon: 'security',
              title: 'Security',
              description: 'Protect sensitive data on premises or on the public cloud, starting from your engineering practices all the way to infrastructure.'
            },
            {
              icon: 'ui-ux',
              title: 'UX & UI',
              description: 'Create delightful experiences for customers by defining user journeys and creating interfaces that are use case driven. '
            },
            {
              icon: 'test-automation',
              title: 'Test Automation',
              description: 'Release frequently without fear of breaking production by increasing your automation coverage and reducing the need for manual regression.'
            }
          ]
        },
        run: {
          cards: [
            {
              icon: 'software-eng',
              title: 'Cloud Architecture',
              description: 'Take advantage of Cloud native services across multiple clouds, even stretching from your on premises environments to the public cloud.'
            },
            {
              icon: 'devops',
              title: 'DevOps Engineers',
              description: 'To achieve this, it would be necessary to have uniform grammar, pronunciation and more'
            },
            {
              icon: 'ai-machine',
              title: 'Socially Responsible Investment ',
              description: 'If several languages coalesce, the grammar of the resulting language is more simple and regular'
            },
            {
              icon: 'security',
              title: 'Site Reliability Engineering ',
              description: 'The new common language will be more simple and regular than the existing'
            }
          ]
        }
      },
      articles: [
        {
          img: '/img/insight-item.png',
          title: 'Fertile data: why building quality into your process is important',
          badge: 'Publications',
          created_at: 'June 20, 2020',
          author: {
            image: 'img/avatar.png',
            name: 'Leo Philips',
          }
        },
        {
          img: '/img/insight-item.png',
          title: 'Operating models: A design for digital success',
          badge: 'Case study',
          created_at: 'June 20, 2020',
          author: {
            image: 'img/avatar.png',
            name: 'Emery Darwart',
          }
        },
        {
          img: '/img/insight-item.png',
          title: 'Pushing the boundaries of customer experience',
          badge: 'shows',
          created_at: 'June 20, 2020',
          author: {
            image: 'img/avatar.png',
            name: 'Pedro Sttau',
          }
        }
      ],
      testimonials: [
        {
          text: 'To build <span class="heading-mobile-xs--regular heading-l--regular">great technology</span> you need to make sure that it is neither the starting  point or your end goal. <span class="heading-mobile-xs--regular heading-l--regular">Great products are built when teams care about solving problems </span> that they connect with and feel are worth solving. Technology is nothing but an <span class="heading-mobile-xs--regular heading-l--regular">outcome of doing this right.</span>',
          author: {
            image: 'img/avatar_big.png',
            name: 'Pedro Sttau',
          }
        },
        {
          text: 'We are all called, at least once, to play a role that surpasses us. It is at this moment that we justify the rest of our life, lost in the performance of small roles we play that are unworthy of what we are.”',
          author: {
            image: 'https://alchetron.com/cdn/lus-de-sttau-monteiro-67979f23-925f-415e-b70c-be9a09b88e0-resize-750.jpeg',
            name: 'Luís de Sttau',
          }
        },
      ],
      controlledSwiper: null,
      activeTab: 'plan',
      updateKeyIndex: 0
    }
  },
  methods: {
    setControlledSwiper(swiper) {
      this.controlledSwiper = swiper;
    },
    onSlideChange(a) {
      this.testimonialsCarouselIndex = a.activeIndex;
    },
    moveTo(id) {
      this.testimonialsCarouselIndex = id;
      this.controlledSwiper.slideTo(id);
    }
  },
  mounted() {
    if(this.$route.hash && ["#plan", "#build", "#run"].includes(this.$route.hash)) {
      this.$scrollTo(document.querySelector("#recruit-section"));
      setTimeout(() => {
        this.activeTab = this.$route.hash.replace("#", "");
        this.updateKeyIndex++;
      }, 100);
    }
  },
}
</script>
