<template>
  <section id="welcome-section">
    <section class="container">
      <h1 class="heading-mobile-s--light heading-xl--light">
        We help ASEAN companies to find world  class tech talent no matter where in the  World they are.
      </h1>

      <Button size="lg" mobile="md" icon="arrow-down" text="Get to know us better" class="mt-55 mt-mobile-40" icon-class="down"/>
    </section>
  </section>

  <section id="recruit-section">
    <section class="container">
      <p class="overline-s--medium text-uppercase mb-32 mb-mobile-8 letter-spacing-08em">We recruit people who</p>
      <Tabs :tabs="tabs">
        <template v-slot:tab-plan>
          <section>
            <div class="d-flex justify-content-between flex-mobile-column">
              <h2 class="flex-1 heading-mobile-xs--regular heading-l--regular mr-32 width-50 line-height-64 line-height-mobile-36">
                We don't hire humans that we
                would not like to spend time
                with ourselves.
              </h2>

              <div class="flex-1 width-50 mt-mobile-16">
                <h4 class="body-mobile-m--regular body-l--regular mb-mobile-0 mb-32 mr-mobile-16 line-height-32 line-height-mobile-24">We are aware that technical aspects are only the tip of the iceberg. Our people are not only highly
                  qualified but we also are on the same wavelength. Development process is a long run, so you will need a
                  great team.</h4>

                <div class="d-flex d-mobile-none">
                  <Button text="Read more details" icon="arrow-right" type="secondary" size="lg"/>
                  <Button text="Get in touch" icon="arrow-right" class="ml-16" size="lg"/>
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
              <Button text="Read more details" icon="arrow-right" size="lg" mobile="md" />
            </div>
          </section>
        </template>

        <template v-slot:tab-build>
          <section>
            <div class="d-flex justify-content-between flex-mobile-column">
              <h2 class="flex-1 heading-mobile-xs--regular heading-l--regular mr-32 width-50 line-height-64 line-height-mobile-36">
                Technology spreads like wildfire, but we can master it
              </h2>

              <div class="flex-1 width-50 mt-mobile-16">
                <h4 class="body-mobile-m--regular body-l--regular mb-32 mb-mobile-0 mr-mobile-16 line-height-32 line-height-mobile-24">Newest engineering approaches are our priority so we
                  keep it up to date. Our specialists apply advanced solutions such as AI, Machine Learning and so on.
                  It will bring real value to your organization.</h4>

                <div class="d-flex d-mobile-none">
                  <Button text="Read more details" icon="arrow-right" type="secondary" size="lg"/>
                  <Button text="Get in touch" icon="arrow-right" class="ml-16" size="lg"/>
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
              <Button text="Read more details" icon="arrow-right" size="lg" mobile="md" />
            </div>
          </section>
        </template>

        <template v-slot:tab-run>
          <section>
            <div class="d-flex justify-content-between flex-mobile-column">
              <h2 class="flex-1 heading-mobile-xs--regular heading-l--regular mr-32 width-50 line-height-64 line-height-mobile-36">
                There is no place for consulting in execution. We  are in the business of doing,  not talking.
              </h2>

              <div class="flex-1 width-50 mt-mobile-16">
                <h4 class="body-mobile-m--regular body-l--regular mb-32 mb-mobile-0 mr-mobile-16 line-height-32 line-height-mobile-24">Only right execution makes a well prepared strategy
                  effective. Development is a long term process combined from individual technologies. We are not here
                  to take the placement commission, we care about successful implementation as much as you do.</h4>

                <div class="d-flex d-mobile-none">
                  <Button text="Read more details" icon="arrow-right" type="secondary" size="lg"/>
                  <Button text="Get in touch" icon="arrow-right" class="ml-16" size="lg"/>
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
              <Button text="Read more details" icon="arrow-right" size="lg" mobile="md" />
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
            Empowering <span class="heading-mobile-s--medium heading-l--medium">Huawei’s</span> internal solutions with technology
          </h2>

          <div class="flex-1 width-50 mt-mobile-16">
            <h4 class="body-mobile-m--regular body-l--regular mb-32 line-height-32 line-height-mobile-24">Our cooperation resulted in complete rearrangement of
              technological infrastructure in the IT department and efficiency increased by almost 15%. 30 of our
              specialists have been permanently contracted, keeping a new long-term improvement plan well executed.</h4>

            <div class="d-flex">
              <Button text="Read case study" icon="arrow-right" type="secondary" size="lg" mobile="md"/>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section class="container container-stats">
      <section class="bottom--featured">
        <section class="items">
          <div>
            <h3 class="heading-xxl--regular">15%</h3>
            <p class="body-l--regular mt-10">Efficiency Growth</p>
          </div>
          <div>
            <h3 class="heading-xxl--regular">$14m</h3>
            <p class="body-l--regular mt-10">Increased Conversion</p>
          </div>
          <div>
            <h3 class="heading-xxl--regular">30</h3>
            <p class="body-l--regular mt-10">Specialist Involved</p>
          </div>
        </section>
      </section>
    </section>
  </section>

  <section id="articles">
    <section class="container">
      <p class="overline-s--medium text-uppercase mb-32 text-stone-gray mb-mobile-8 letter-spacing-08em">insights</p>

      <div class="d-flex justify-content-between flex-mobile-column">
        <h2 class="flex-1 heading-mobile-s--regular heading-l--regular mr-32 width-50 line-height-64 line-height-mobile-42">
          Leverage our knowledge
        </h2>

        <div class="flex-1 width-50 mt-mobile-16">
          <h4 class="body-mobile-m--regular mb-mobile-0 body-l--regular mb-32 line-height-32 line-height-mobile-24">Dive deeper into our past projects and new learnings. We are openly sharing knowledge.</h4>

          <div class="d-flex d-mobile-none">
            <Button text="Read all insights" icon="arrow-right" size="lg" mobile="md"/>
          </div>
        </div>
      </div>


      <section class="article-cards">
        <ArticleCard v-for="article in articles" :item="article" />
      </section>

      <div class="d-flex d-desktop-none mt-20">
        <Button text="Read all insights" icon="arrow-right" size="lg" mobile="md"/>
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
              description: 'Everyone realizes why a new common language would be desirable one could'
            },
            {
              icon: 'agile',
              title: 'Agile and Scrum',
              description: 'To achieve this, it would be necessary to have uniform grammar, pronunciation and more'
            },
            {
              icon: 'product-manage',
              title: 'Product Management',
              description: 'If several languages coalesce, the grammar of the resulting language is more simple and regular'
            },
            {
              icon: 'delivery-manage',
              title: 'Delivery Management',
              description: 'The new common language will be more simple and regular than the existing'
            }
          ]
        },
        build: {
          cards: [
            {
              icon: 'software-eng',
              title: 'Software Engineering',
              description: 'Everyone realizes why a new common language would be desirable one could'
            },
            {
              icon: 'solution-arch',
              title: 'Solutions Architecture',
              description: 'To achieve this, it would be necessary to have uniform grammar, pronunciation and more'
            },
            {
              icon: 'ai-machine',
              title: 'AI & Machine Learning',
              description: 'If several languages coalesce, the grammar of the resulting language is more simple and regular'
            },
            {
              icon: 'security',
              title: 'Security',
              description: 'The new common language will be more simple and regular than the existing'
            },
            {
              icon: 'ui-ux',
              title: 'UX & UI',
              description: 'The new common language will be more simple and regular than the existing'
            },
            {
              icon: 'test-automation',
              title: 'Test Automation',
              description: 'The new common language will be more simple and regular than the existing'
            }
          ]
        },
        run: {
          cards: [
            {
              icon: 'software-eng',
              title: 'Cloud Architecture',
              description: 'Everyone realizes why a new common language would be desirable one could'
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
          img: '/img/insight-item.svg',
          title: 'Fertile data: why building quality into your process is important',
          badge: 'Publications',
          created_at: 'June 20, 2020',
          author: {
            image: 'img/avatar.svg',
            name: 'Leo Philips',
          }
        },
        {
          img: '/img/insight-item.svg',
          title: 'Operating models: A design for digital success',
          badge: 'Case study',
          created_at: 'June 20, 2020',
          author: {
            image: 'img/avatar.svg',
            name: 'Emery Darwart',
          }
        },
        {
          img: '/img/insight-item.svg',
          title: 'Pushing the boundaries of customer experience',
          badge: 'shows',
          created_at: 'June 20, 2020',
          author: {
            image: 'img/avatar.svg',
            name: 'Pedro Sttau',
          }
        }
      ],
      testimonials: [
        {
          text: 'To build <span class="heading-mobile-xs--regular heading-l--regular">great technology</span> you need to make sure that it is neither the starting  point or your end goal. <span class="heading-mobile-xs--regular heading-l--regular">Great products are built when teams care about solving problems </span> that they connect with and feel are worth solving. Technology is nothing but an <span class="heading-mobile-xs--regular heading-l--regular">outcome of doing this right.</span>',
          author: {
            image: 'img/avatar_big.svg',
            name: 'Pedro Sttau',
          }
        },
        {
          text: 'To build <span class="heading-mobile-xs--regular heading-l--regular">great technology</span> you need to make sure that it is neither the starting  point or your end goal. <span class="heading-mobile-xs--regular heading-l--regular">Great products are built when teams care about solving problems </span> that they connect with and feel are worth solving. Technology is nothing but an <span class="heading-mobile-xs--regular heading-l--regular">outcome of doing this right.</span>',
          author: {
            image: 'img/avatar_big.svg',
            name: 'Pedro Sttau',
          }
        },
        {
          text: 'To build <span class="heading-mobile-xs--regular heading-l--regular">great technology</span> you need to make sure that it is neither the starting  point or your end goal. <span class="heading-mobile-xs--regular heading-l--regular">Great products are built when teams care about solving problems </span> that they connect with and feel are worth solving. Technology is nothing but an <span class="heading-mobile-xs--regular heading-l--regular">outcome of doing this right.</span>',
          author: {
            image: 'img/avatar_big.svg',
            name: 'Pedro Sttau',
          }
        }
      ],
      controlledSwiper: null,
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
  }
}
</script>
