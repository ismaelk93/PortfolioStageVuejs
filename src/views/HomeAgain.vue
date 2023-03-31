<template>
  <NavBar :media="media" />
  <IntroCard />
  <Grid :home="true" />
  <MainFooter />
</template>

<script>
import IntroCard from "@/components/IntroCard.vue";
import Grid from "@/components/Grid/Grid.vue";
import NavBar from "@/components/NavBar.vue";
import MainFooter from "@/components/MainFooter.vue";
import { homeVID } from "@/utils/media.js";

export default {
  name: "home-again",
  components: {
    IntroCard,
    NavBar,
    Grid,
    MainFooter,
  },
  data: function () {
    return {
      media: {
        name: "animation pepenome",
        type: "video",
        asset: homeVID,
      },
    };
  },
};
</script>
