<template>
  <section id="welcome-insights">
    <section class="container">
      <section class="items">
        <div class="mt-mobile-16">
          <Badge text="publications"/>
          <router-link :to="{ name: 'Publication' }" class="no-css hover-underline">
            <h1 class="heading-mobile-xs--light heading-l--light line-height-64 mt-mobile-16 mt-31 line-height-mobile-36">
              Best Tasting Plant-Based Complete Nutrition on the Market
            </h1>
          </router-link>

          <ul class="d-flex align-center navigation mt-24 mt-mobile-16">
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

          <Button :to="{ name: 'Publication'}" text="Read more" icon="arrow-right" class="mt-40 mt-mobile-32" size="lg" mobile="md"/>
        </div>
        <div>
          <section class="image--section">
            <router-link :to="{name: 'Publication'}">
              <div class="img-abs">
                <img src="/img/insight-bg.png" class="main-image"/>

                <div class="arrow">
                  <Icon href="arrow-right" size="42" fill="#000"/>
                </div>
              </div>
            </router-link>
          </section>
        </div>
      </section>
    </section>
  </section>

  <section id="insight-featured--section">
    <section class="container" id="publications">
      <p class="overline-s--medium text-uppercase mb-16 text-stone-gray mb-mobile-16 letter-spacing-08em">insights</p>
      <h2 class="heading-mobile-s--regular heading-m--regular mb-mobile-40 mb-64">Featured publications</h2>

      <section class="featured--items d-mobile-none d-desktop-block">
        <PublicationCard v-for="publication in publications" :item="publication"/>
      </section>

      <section class="articles-box d-mobile-block d-desktop-none">
        <section class="article-cards">
          <ArticleCard v-for="publication in publications" :item="publication" />
        </section>
      </section>
    </section>
  </section>

  <section id="insight-categories">
    <section class="container">
      <section class="items">
        <div class="item">
          <p class="overline-s--medium text-uppercase mb-16 text-stone-gray mb-mobile-16 letter-spacing-08em">insights</p>
          <h2 class="heading-mobile-s--regular heading-m--regular mb-mobile-40 mb-64">Categories</h2>
        </div>

        <div class="item">
          <div>
            <h2 class="body-mobile-l--medium heading-xs--medium mb-mobile-24 mb-32 d-flex align-center"
                @click="openTab('shows')"
                :class="{'opened' : category === 'shows'}"
            >
              Shows
              <Icon href="chevron-down" fill="#000" class="ml-14 mt-2 d-block-mobile d-desktop-none" size="12"/>
            </h2>
            <ul :class="{'opened' : category === 'shows'}" class="mb-mobile-24">
              <li>
                <router-link to="#" class="body-m--regular mb-mobile-12 mb-32">Case studies</router-link>
              </li>
              <li>
                <router-link to="#" class="body-m--regular mb-mobile-12 mb-32">Shows</router-link>
              </li>
              <li>
                <router-link to="#" class="body-m--regular">
                  Blog
                  <Icon href="external-link" size="12" class="ml-8"/>
                </router-link>
              </li>
            </ul>
          </div>

          <div>
            <h2 class="body-mobile-l--medium heading-xs--medium mb-mobile-24 mb-32 d-flex align-center"
                @click="openTab('publications')"
                :class="{'opened' : category === 'publications'}"
            >
              Publications
              <Icon href="chevron-down" fill="#000" class="ml-14 mt-2 d-block-mobile d-desktop-none" size="12"/>
            </h2>
            <ul :class="{'opened' : category === 'publications'}" class="mb-mobile-24">
              <li>
                <router-link to="#" class="body-m--regular mb-mobile-12 mb-32">Managment</router-link>
              </li>
              <li>
                <router-link to="#" class="body-m--regular mb-mobile-12 mb-32">Product</router-link>
              </li>
              <li>
                <router-link to="#" class="body-m--regular mb-mobile-12 mb-32">Technology</router-link>
              </li>
              <li>
                <router-link to="#" class="body-m--regular">Culture</router-link>
              </li>
            </ul>
          </div>

          <div>
            <h2 class="body-mobile-l--medium heading-xs--medium d-flex align-center mb-32 mb-mobile-0"
                @click="openTab('articles')"
                :class="{'opened' : category === 'articles'}"
            >
              Articles
              <Icon href="chevron-down" fill="#000" class="ml-14 mt-2 d-block-mobile d-desktop-none" size="12"/>
            </h2>
            <ul :class="{'opened' : category === 'articles'}" class="mt-mobile-16">
              <li>
                <router-link to="#" class="body-m--regular mb-mobile-12 mb-32">Featured</router-link>
              </li>
              <li>
                <router-link to="#" class="body-m--regular mb-mobile-12 mb-32">Most popular</router-link>
              </li>
              <li>
                <router-link to="#" class="body-m--regular">Recent</router-link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  </section>

  <section class="insight-articles-section" id="case-studies">
    <section class="container">
      <p class="overline-s--medium text-uppercase mb-16 text-stone-gray mb-mobile-16 letter-spacing-08em">insights</p>
      <h2 class="heading-mobile-s--regular heading-m--regular mb-mobile-40 mb-64">Case studies</h2>

      <section class="articles-box">
        <section class="article-cards">
          <ArticleCard v-for="study in studies" :item="study" />
        </section>

        <section class="d-flex justify-content-center mt-mobile-20 mt-80">
          <Button text="Read all publications" icon="arrow-right" size="lg" type="secondary"/>
        </section>
      </section>
    </section>
  </section>

  <section class="insight-articles-section bg-light-gray" id="shows">
    <section class="container">
      <p class="overline-s--medium text-uppercase mb-16 text-stone-gray mb-mobile-16 letter-spacing-08em">insights</p>
      <h2 class="heading-mobile-s--regular heading-m--regular mb-mobile-40 mb-64">Shows</h2>

      <section class="articles-box">
        <section class="article-cards">
          <ArticleCard v-for="show in shows" :item="show" />
        </section>

        <section class="d-flex justify-content-center mt-mobile-20 mt-80">
          <Button text="Check more shows" icon="arrow-right" size="lg" type="secondary" class="transparent"/>
        </section>
      </section>
    </section>
  </section>

  <section class="insight-articles-section">
    <section class="container">
      <p class="overline-s--medium text-uppercase mb-16 text-stone-gray mb-mobile-16 letter-spacing-08em">insights</p>
      <h2 class="heading-mobile-s--regular heading-m--regular mb-mobile-40 mb-64">Trending articles</h2>

      <section class="articles-box">
        <section class="article-cards">
          <ArticleCard v-for="study in studies" :item="study" />
        </section>

        <section class="d-flex justify-content-center mt-mobile-20 mt-80">
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
      category : null
    }
  },
  methods : {
    openTab(category) {
      if(category === this.category) this.category = null;
      else this.category = category;
    }
  },
  mounted() {
    if(this.$route.hash) this.$scrollTo(document.querySelector(this.$route.hash))
  }
}
</script>

<style scoped>

</style>