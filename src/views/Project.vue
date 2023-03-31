<template>
  <NavBar :media="media" />
  <Grid />
  <MainFooter />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MainFooter from "@/components/MainFooter.vue";
import Grid from "@/components/Grid/Grid.vue";
import { mesProjets2 } from "@/utils/media.js";

export default {
  name: "Project",
  components: {
    NavBar,
    MainFooter,
    Grid,
  },
  data: function () {
    return {
      media: {
        name: "animation présentant les différents projets",
        type: "video",
        asset: mesProjets2,
      },
    };
  },
};
</script>
