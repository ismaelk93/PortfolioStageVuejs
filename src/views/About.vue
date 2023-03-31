<template>
  <NavBar :media="media" />
  <AboutCard />
  <CredoCard />
  <ReviewCard />
  <MainFooter class="main-footer__up--black" />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import AboutCard from "@/components/AboutCard.vue";
import CredoCard from "@/components/CredoCard.vue";
import ReviewCard from "@/components/ReviewCard.vue";
import MainFooter from "@/components/MainFooter.vue";
import { AboutVID } from "@/utils/media.js";

export default {
  name: "About",
  components: {
    NavBar,
    AboutCard,
    CredoCard,
    ReviewCard,
    MainFooter,
  },
  data: function () {
    return {
      media: {
        name: "animation présentant les différentes compétences",
        type: "video",
        asset: AboutVID,
      },
    };
  },
};
</script>
