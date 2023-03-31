<template>
  <article class="review-card">
    <article class="review-card__up">
      <p>Clients Satisfaits !</p>
      <h2>
        <LetterFlip word="LES RETOURS" />
      </h2>
    </article>
    <ReviewCarousel @nextSlide="nextSlide" @prevSlide="prevSlide">
      <ReviewCarouselSlide :key="slide" :index="index" :visibleSlide="visibleSlide" :direction="direction" v-for="(slide, index) in reviews">
        <article class="review-card__cite-box">
          <cite>&laquo; {{ slide.textPt1 }}</cite>
          <cite>{{ slide.textPt2 }} &raquo;</cite>
          <h3>{{ slide.author }}</h3>
        </article>
      </ReviewCarouselSlide>
    </ReviewCarousel>
  </article>
</template>

<script>
import ReviewCarousel from "./ReviewCarousel.vue";
import LetterFlip from "./letterFlip.vue";
import ReviewCarouselSlide from "./ReviewCarouselSlide.vue";
export default {
  name: "ReviewCard",
  components: {
    ReviewCarousel,
    ReviewCarouselSlide,
    LetterFlip
  },
  data: () => {
    return {
      reviews: [
        {
          textPt1: "Très heureux du travail de Noémie.",
          textPt2: "Nous avons d'ailleurs décidé de la placer en priorité dans nos futurs projets de graphisme.",
          author: "Boxing culture",
        },
        {
          textPt1:
            "Noémie nous a accompagné dans le cadre de ses études dans la création de contenu de qualité. Elle nous a aussi rafraichit notre logo pour un look moderne et pro.   Je vous la recommande si vous cherchez quelqu'un de sérieux et engagé dans vos projets !",
          textPt2: " Expérience au top, merci pour ton travail Noémie.",
          author: "NOLEX",
        },
        {
          textPt1:
            "Nous vous conseillons les yeux fermés Noémie, pour sa créativité et sa réactivité ! Noémie a su moderniser notre logo, et a été à l'écoute de notre besoin.",
          textPt2: "N'hésitez pas à la contacter pour tous vos projets.",
          author: "BOULANGERIE CHAVES",
        },
        {
          textPt1:
            "J'ai fais appel à Noémie pour plusieurs choses (cartes, flyers, marque page, vidéo) Et je reviendrais sans souci vers elle. Noémie est à l'écoute, cerne rapidement vos désirs et fait preuve d'un grand professionnalisme.",
          textPt2: "Merci pour tout tes conseils et ton aide précieuse 😁",
          author: "LAETITIA SOPHROLOGIE",
        },
        {
          textPt1:
            "Très bonne collaboration sur le maquettage d'un kit pédagogique graphique sur les thématiques du handicap pour le Ministère des Solidarités et de la Santé en collaboration. Nous avons été impressionné par le travail réalisé ainsi que l'engagement.  Noémie est disponible, à l'écoute et ses rendus ont harmonieusement illustré le kit !",
          textPt2: "Merci pour son aide !!",
          author: "ALLIANCE C",
        },
        {
          textPt1: "Super experience avec Noémie.",
          textPt2: "Je n'hésiterais pas à retravailler avec elle sur de prochaines missions.",
          author: "CRÉADIS",
        },
        {
          textPt1: "Noémie est compétente et respectueuse des délais. ",
          textPt2: "Nous sommes satisfaits de son travail.",
          author: "CODES ROUSSEAU",
        },
      ],
      visibleSlide: 0,
      direction: "right",
      interval: null,
    };
  },
  computed: {
    reviewsLength: function () {
      return this.reviews.length;
    },
  },
  methods: {
    nextSlide: function () {
      this.visibleSlide++;
      this.direction = "right";
      this.interval = null;
      if (this.visibleSlide >= this.reviewsLength) {
        this.visibleSlide = 0;
      }
    },
    prevSlide: function () {
      this.visibleSlide--;
      this.direction = "left";
      this.interval = null;
      if (this.visibleSlide < 0) {
        this.visibleSlide = this.reviewsLength - 1;
      }
    },
  },
  mounted: function () {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 12000);
  },
};
</script>
