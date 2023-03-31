<template>
  <div :class="this.class">
    <a v-for="image in footerSocialMedia" :key="image.name" v-bind:href="image.url" target="_blank">
      <img v-bind:src="image.path" v-bind:alt="image.name" />
    </a>
  </div>
</template>

<script>
import { linkedIn, insta, mail, behance } from "@/utils/media";
export default {
  name: "SocialMedia",
  props: {
    class: {
      default: "main-footer__social-media",
      type: String,
    },
  },
  data: () => {
    return {
      footerSocialMedia: [
        { name: "linkedIn icone", path: linkedIn, url: "https://www.linkedin.com/in/noémie-pellencin/" },
        { name: "insta icone", path: insta, url: "https://www.instagram.com/pepe_nome/" },
        { name: "mail icone", path: mail, url: "mailto:hello@pepenome.fr" },
        { name: "behance icone", path: behance, url: "https://www.behance.net/pepenome" },
      ],
    };
  },
};
</script>
