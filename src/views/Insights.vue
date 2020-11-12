<template>
  <section id="welcome-insights">
    <section class="container">
      <section class="items">
        <div>
          <Badge text="publications"/>
          <h1 class="heading-l--light line-height-64 mt-31">Best Tasting Plant-Based Complete Nutrition on the Market</h1>

          <ul class="d-flex align-center navigation mt-24">
            <li>
              <ul class="d-flex align-center">
                <li class="w-24 h-24"><img src="/img/avatar_2.png" alt="Pedro Stauu"/></li>
                <li class="caption-m--regular ml-8 text-black">Pedro Stauu</li>
              </ul>
            </li>
            <li class="dot"></li>
            <li>
              <p class="caption-m--regular created-date">June 20, 2020</p>
            </li>
          </ul>

          <Button text="Read more" icon="arrow-right" class="mt-40" size="lg"/>
        </div>
        <div>
          <div class="img-abs">
            <img src="/img/insight-bg.png">
          </div>
        </div>
      </section>
    </section>
  </section>

  <section id="insight-featured--section">
    <section class="container">
      <p class="overline-s--medium text-uppercase mb-16 text-stone-gray mb-mobile-16 letter-spacing-08em">insights</p>
      <h2 class="heading-m--regular mb-64">Featured publications</h2>

      <section class="featured--items">
        <PublicationCard v-for="publication in publications" :item="publication"/>
      </section>
    </section>
  </section>

  <section id="insight-categories">
    <section class="container">
      <section class="items">
        <div class="item">
          <p class="overline-s--medium text-uppercase mb-16 text-stone-gray mb-mobile-16 letter-spacing-08em">insights</p>
          <h2 class="heading-m--regular mb-64">Categories</h2>
        </div>

        <div class="item">
          <div>
            <h2 class="heading-xs--medium mb-32">Shows</h2>
            <ul>
              <li>
                <router-link to="#" class="body-m--regular mb-32">Case studies</router-link>
              </li>
              <li>
                <router-link to="#" class="body-m--regular mb-32">Shows</router-link>
              </li>
              <li>
                <router-link to="#" class="body-m--regular mb-32">
                  Blog
                  <Icon href="external-link" size="12" class="ml-8"/>
                </router-link>
              </li>
            </ul>
          </div>

          <div>
            <h2 class="heading-xs--medium mb-32">Publications</h2>
            <ul>
              <li>
                <router-link to="#" class="body-m--regular mb-32">Managment</router-link>
              </li>
              <li>
                <router-link to="#" class="body-m--regular mb-32">Product</router-link>
              </li>
              <li>
                <router-link to="#" class="body-m--regular mb-32">Technology</router-link>
              </li>
              <li>
                <router-link to="#" class="body-m--regular mb-32">Culture</router-link>
              </li>
            </ul>
          </div>

          <div>
            <h2 class="heading-xs--medium mb-32">Articles</h2>
            <ul>
              <li>
                <router-link to="#" class="body-m--regular mb-32">Featured</router-link>
              </li>
              <li>
                <router-link to="#" class="body-m--regular mb-32">Most popular</router-link>
              </li>
              <li>
                <router-link to="#" class="body-m--regular mb-32">Recent</router-link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  </section>

  <section class="insight-articles-section">
    <section class="container">
      <p class="overline-s--medium text-uppercase mb-16 text-stone-gray mb-mobile-16 letter-spacing-08em">insights</p>
      <h2 class="heading-m--regular mb-64">Case studies</h2>

      <section class="articles-box">
        <section class="article-cards">
          <ArticleCard v-for="study in studies" :item="study" />
        </section>

        <section class="d-flex justify-content-center mt-80">
          <Button text="Read all publications" icon="arrow-right" size="lg" type="secondary"/>
        </section>
      </section>
    </section>
  </section>

  <section class="insight-articles-section bg-light-gray">
    <section class="container">
      <p class="overline-s--medium text-uppercase mb-16 text-stone-gray mb-mobile-16 letter-spacing-08em">insights</p>
      <h2 class="heading-m--regular mb-64">Shows</h2>

      <section class="articles-box">
        <section class="article-cards">
          <ArticleCard v-for="show in shows" :item="show" />
        </section>

        <section class="d-flex justify-content-center mt-80">
          <Button text="Check more shows" icon="arrow-right" size="lg" type="secondary"/>
        </section>
      </section>
    </section>
  </section>

  <section class="insight-articles-section">
    <section class="container">
      <p class="overline-s--medium text-uppercase mb-16 text-stone-gray mb-mobile-16 letter-spacing-08em">insights</p>
      <h2 class="heading-m--regular mb-64">Trending articles</h2>

      <section class="articles-box">
        <section class="article-cards">
          <ArticleCard v-for="study in studies" :item="study" />
        </section>

        <section class="d-flex justify-content-center mt-80">
          <Button text="Read all publications" icon="arrow-right" size="lg" type="secondary"/>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import ArticleCard from "@/components/cards/ArticleCard";
import PublicationCard from "@/components/cards/PublicationCard";
import Icon from "@/components/Icon";

export default {
  components: {Icon, PublicationCard, ArticleCard, Button, Badge},
  data() {
    return {
      studies: [
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
      shows: [
        {
          img: '/img/insight-item.png',
          title: '8 outstanding product responses to COVID-19',
          badge: 'Publications',
          created_at: 'June 20, 2020',
          author: {
            image: 'img/avatar.png',
            name: 'Leo Philips',
          }
        },
        {
          img: '/img/insight-item.png',
          title: 'Pushing the boundaries of customer experience',
          badge: 'Case study',
          created_at: 'June 20, 2020',
          author: {
            image: 'img/avatar.png',
            name: 'Emery Darwart',
          }
        },
        {
          img: '/img/insight-item.png',
          title: '5G will disrupt product design. Here’s what you need to know',
          badge: 'shows',
          created_at: 'June 20, 2020',
          author: {
            image: 'img/avatar.png',
            name: 'Pedro Sttau',
          }
        }
      ],
      publications: [
        {
          img: '/img/insight-item.png',
          title: 'The underrated design book that transformed the way I work',
          badge: 'Publications',
          created_at: 'June 20, 2020',
          author: {
            image: 'img/avatar.png',
            name: 'Leo Philips',
          }
        },
        {
          img: '/img/insight-item.png',
          title: 'How to estimate the ROI of design work',
          badge: 'shows',
          created_at: 'June 14, 2020',
          author: {
            image: 'img/avatar.png',
            name: 'Abram Levin',
          }
        },
        {
          img: '/img/insight-item.png',
          title: 'The 1 tool that helps remote teams collaborate better',
          badge: 'case studies',
          created_at: 'June 12, 2020',
          author: {
            image: 'img/avatar.png',
            name: 'Corey Rosser',
          }
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>