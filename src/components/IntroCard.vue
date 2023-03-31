<template>
  <div class="intro-card-box" @mouseenter="mouseOverDiv()">
    <div class="intro-pic">
      <!--picture frame -->
      <div class="pola-picture-box" >
        <img src="@/assets/img/PHOTO-POLA.png" alt="portrait polaroid de Noémie Pellencin" />
      </div>
    </div>
    <div class="intro-text">
      <!-- text -->
      <h3>PEPENOME</h3>
      <div class="intro-name">
        <h2>Noémie</h2>
        <h2>PELLENCIN</h2>
        <hr />
      </div>
      <div class="intro-desc">
        <p>Auto-entrepreneuse depuis février 2021 en tant que <strong>Directrice Artistique et Designer Graphique</strong>.</p>
        <p>
          Je <strong>donne vie à vos projets</strong> et suis à l'écoute pour toutes vos demandes: une identité visuelle unique en son genre, une
          vidéo motion sur mesure, une carte de visite créative, etc.
        </p>
        <p><strong>Bienveillance et créativité</strong> sont au coeur des projets que j'entreprends avec mes clients.</p>
      </div>
      <h3 class="intro-more">
        <router-link @mouseover="mouseOverLink()" @mouseleave="mouseLeaveLink()" class="knwMoreTransition" to="/about" @click="scrollToTop">
          <letter-flip word="EN SAVOIR PLUS" class='soulignement' />
        </router-link>
      </h3>
    </div>
  </div>
</template>

<script>
import LetterFlip from './letterFlip.vue';
export default {
    name: "intro-card",
    data: () => {
        return {
            isTextAnimActive: false,
            isPicAnimActive: false,
        };
    },
    methods: {
        scrollToTop: function () {
            window.scrollTo(0, 0);
        },
        mouseOverLink() {
            this.isTextAnimActive = true;
        },
        mouseLeaveLink() {
            this.isTextAnimActive = false;
        },
        mouseOverDiv() {
            this.isPicAnimActive = true;
        },
    },
    components: { LetterFlip }
};
</script>
