<template>
  <section id="publication--pdf">
    <section class="container--publication">
      <div id="welcome--publication" class="mb-64 mb-mobile-32">
        <div class="small--container">
          <Badge text="publications" class="mt-6 mt-mobile-8"/>
          <h1 class="heading-mobile-xs--light heading-l--light line-height-mobile-36 line-height-64 my-24 my-mobile-16">
            Best Tasting Plant-Based Complete Nutrition on the Market</h1>

          <ul class="d-flex align-center navigation mt-24 mt-mobile-16 mb-64 mb-mobile-32">
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
        </div>

        <img src="/img/insight-big-bg.png" alt="" class="bg-img"/>
      </div>

      <div class="publication--article">
        <div class="social-icons">
          <h6 class="caption-m--medium">Share:</h6>
          <ul class="icons">
            <li>
              <a class="tooltip-box c-pointer" data-sharer="linkedin" :data-title="share.title" :data-url="share.url">
                <Icon href="linkedin" size="18"/>
                <span class="tooltip-text">LinkedIn</span>
              </a>
            </li>
            <li>
              <a class="tooltip-box c-pointer" data-sharer="twitter" :data-title="share.title" :data-url="share.url">
                <Icon href="twitter" size="20"/>
                <span class="tooltip-text">Twitter</span>
              </a>
            </li>
            <li>
              <a class="tooltip-box c-pointer" data-sharer="facebook" :data-title="share.title" :data-url="share.url">
                <Icon href="facebook" size="19"/>
                <span class="tooltip-text">Facebook</span>
              </a>
            </li>
            <li>
              <a class="tooltip-box copy-link c-pointer" :data-clipboard-text="copyUrl">
                <Icon href="link" size="18"/>
                <span class="tooltip-text bottom">{{ copyTooltip }}</span>
              </a>
            </li>
            <li>
              <a href="#" class="tooltip-box" @click.prevent="downloadPdf">
                <Icon href="download" size="18"/>
                <span class="tooltip-text">Download publication as PDF</span>
              </a>
            </li>
          </ul>
        </div>

        <section class="small--container">
          <section class="content">
            <p>
              Serverless architecture has fast become a hot topic in tech, thanks partly to its promise of drastically
              reducing your time-to-market. Nonetheless, many IT leaders remain cautious about serverless because of their
              fears over vendor lock-in. In this a rticle, I’ll explore therealities of what lock-in means in the context
              of
              serverless — and propose strategies to minimize your risks.
            </p>

            <p>
              <a href="#">As we mentioned in previous publication</a>, there are already a number of views on what
              constitutes serverless.
              For the purposes of this piece, I'm using it as described here: application designs that incorporate
              third-party “Backend as a Service” (BaaS) services, and/or that include custom code run in managed,
              ephemeral
              containers on a “Functions as a Service” (FaaS) platform. When thought of in these terms, you can see why
              lock-in can be a major concern. While serverless architectures might reduce your operational cost,
              complexity,
              and engineering lead time, it makes you more reliant on your BaaS provider.
            </p>

            <img src="/img/insight-item.png" class="mb-80 w-100 mt-mobile-8 mb-mobile-32"/>

            <h2>New architecture of system</h2>

            <p>
              Serverless architecture has fast become a hot topic in tech, thanks partly to its promise of drastically
              reducing your time-to-market. Nonetheless, many IT leaders remain cautious about serverless because of their
              fears over vendor lock-in. In this article, I’ll explore the realities of what lock-in means in the context
              of serverless — and propose strategies to minimize your risks.
            </p>

            <p>
              There are already a number of views on what constitutes serverless. For the purposes of this piece, I'm
              using it as described here: application designs that incorporate third-party “Backend as a Service” (BaaS)
              services, and/or that include custom code run in managed, ephemeral containers on a “Functions as a Service”
              (FaaS) platform. When thought of in these terms, you can see why lock-in can be a major concern. While
              serverless architectures might reduce your operational cost, complexity, and engineering lead time, it makes
              you more reliant on your BaaS provider.
            </p>
          </section>
        </section>
      </div>
    </section>

    <section id="testimonials" class="mt-80 mt-mobile-64 publications">
      <section class="container--publication position-relative">
        <span class="quote">“</span>
        <Testimonials :item="testimonial" title-class="heading-mobile-xs--light heading-m--light line-height-48 line-height-mobile-32"/>
      </section>
    </section>

    <section class="container--publication mt-80 mb-136 mt-mobile-64 mb-mobile-32">
      <div class="publication--article">
        <section class="small--container">
          <section class="content">
            <h2>New architecture of system</h2>

            <p>
              Serverless architecture has fast become a hot topic in tech, thanks partly to its promise of drastically
              reducing your time-to-market. Nonetheless, many IT leaders remain cautious about serverless because of their
              fears over vendor lock-in. In this article, I’ll explore the realities of what lock-in means in the context
              of serverless — and propose strategies to minimize your risks.
            </p>

            <p>
              There are already a number of views on what constitutes serverless. For the purposes of this piece, I'm
              using it as described here: application designs that incorporate third-party “Backend as a Service” (BaaS)
              services, and/or that include custom code run in managed, ephemeral containers on a “Functions as a Service”
              (FaaS) platform. When thought of in these terms, you can see why lock-in can be a major concern. While
              serverless architectures might reduce your operational cost, complexity, and engineering lead time, it makes
              you more reliant on your BaaS provider.
            </p>
          </section>
        </section>
      </div>
    </section>

    <section class="container--publication d-desktop-none d-mobile-block mb-mobile-64">
      <div class="publication--article">
        <div class="social-icons">
          <h6 class="caption-m--medium">Share:</h6>
          <ul class="icons">
            <li>
              <a class="tooltip-box c-pointer" data-sharer="linkedin" :data-title="share.title" :data-url="share.url">
                <Icon href="linkedin" size="18"/>
                <span class="tooltip-text">LinkedIn</span>
              </a>
            </li>
            <li>
              <a class="tooltip-box c-pointer" data-sharer="twitter" :data-title="share.title" :data-url="share.url">
                <Icon href="twitter" size="20"/>
                <span class="tooltip-text">Twitter</span>
              </a>
            </li>
            <li>
              <a class="tooltip-box c-pointer" data-sharer="facebook" :data-title="share.title" :data-url="share.url">
                <Icon href="facebook" size="19"/>
                <span class="tooltip-text">Facebook</span>
              </a>
            </li>
            <li>
              <a class="tooltip-box copy-link c-pointer" :data-clipboard-text="copyUrl">
                <Icon href="link" size="18"/>
                <span class="tooltip-text">{{ copyTooltip }}</span>
              </a>
            </li>
            <li>
              <a href="#" class="tooltip-box" @click.prevent="downloadPdf">
                <Icon href="download" size="18"/>
                <span class="tooltip-text">Download publication as PDF</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="insight-articles-section bg-light-gray">
      <section class="container">
        <p class="overline-s--medium text-uppercase mb-16 text-stone-gray mb-mobile-16 letter-spacing-08em">insights</p>
        <h2 class="heading-mobile-s--regular heading-m--regular mb-mobile-40 mb-64">Trending articles</h2>

        <section class="articles-box">
          <section class="article-cards">
            <ArticleCard v-for="article in articles" :item="article"/>
          </section>

          <section class="d-flex justify-content-center mt-mobile-20 mt-80">
            <Button text="Check more shows" icon="arrow-right" size="lg" type="secondary" class="transparent"/>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import Badge from "@/components/Badge";
import ArticleCard from "@/components/cards/ArticleCard";
import Button from "@/components/Button";
import Testimonials from "@/components/cards/Testimonials";
import Icon from "@/components/Icon";

export default {
  components: {Icon, Testimonials, Button, ArticleCard, Badge},
  data() {
    return {
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
      testimonial: {
        text: 'Many IT leaders remain cautious about serverless because of their fears over vendor lock-in. In this article, I’ll explore the realities of what lock-in means in the context of serverless — and propose strategies.',
        author: {
          image: 'img/avatar_big.png',
          name: 'Pedro Sttau',
        }
      },
      share: {
        img: 'https://staging.weevs.com/img/insight-big-bg.png',
        url : 'https://staging.weevs.com/publication',
        title : 'Best Tasting Plant-Based Complete Nutrition on the Market',
        description : 'Serverless architecture has fast become a hot topic in tech, thanks partly to its promise of drastically reducing your time-to-market. Nonetheless, many IT leaders remain cautious about serverless because of their fears over vendor lock-in. In this a rticle, I’ll explore therealities of what lock-in means in the context of serverless — and propose strategies to minimize your risks.',
      },
      copyUrl: window.location.href,
      copyTooltip: 'Copy Link'
    }
  },
  mounted() {
    window.Sharer.init();
    let clipboard = new ClipboardJS('.copy-link')
    clipboard.on('success', () => {
      toastr.options = {
        "positionClass": "toast-bottom-right",
      }
      toastr.clear();
      toastr.success('Copied!');
    });
  },
  methods: {
    downloadPdf() {
      let el = document.querySelector('#publication--pdf');

      html2PDF(el, {
        jsPDF: {
          orientation: 'p',
          unit: 'px',
          format: 'a4',
          putOnlyUsedFonts: true,
          floatPrecision: 'smart'
        },
        html2canvas: {
          imageTimeout: 15000,
          height: el.offsetHeight + 200,
          x: 0,
          y: 0
        },
        imageType: 'image/jpeg',
        output: 'weevs.pdf'
      });
    }
  }
}
</script>

<style scoped>

</style>