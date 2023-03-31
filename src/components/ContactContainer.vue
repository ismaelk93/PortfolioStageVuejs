<template>
  <div class="main-footer">
    <div :class="this.class">
      <p>{{ footerTxt }}</p>
      <p>
        <a href="mailto:hello@pepenome.fr" target="_blank"> <LetterFlip :word="footerTxtContact"/></a>
      </p>
      <SocialMedia />
    </div>
  </div>
</template>

<script>
import SocialMedia from "./SocialMedia.vue";
import LetterFlip from "./letterFlip.vue";
export default {
  components: { SocialMedia, LetterFlip },
  name: "ContactContainer",
  data: () => {
    return {
      footerTxt: "pour tous vos projets",
      footerTxtContact: "contactez-moi !",
    };
  },
  props: {
    class: {
      default: "main-footer__up",
      type: String,
    },
  },
};
</script>
