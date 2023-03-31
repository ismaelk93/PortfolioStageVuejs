<template>
  <div class="main-hp-container">
    <GridHeader :arrow="this.arrow" :filter="filter" :filterArray="filterArray" />
    <div class="hp-container-2">
      <div :class="this.class">
        <GridElement v-for="project in projectArray" :key="project.name" :project="project" :filter="this.filter" />
      </div>
    </div>
    <div class="btn-voirplus" v-if="home">
      <p class="voirplus">
        <router-link to="/projets" @mouseover="mouseOverLink()" @mouseleave="mouseLeaveLink()" @click="scrollToTop">
          <LetterFlip word="VOIR PLUS" class="soulignement" />
          <!-- <span :class="{ 'knwMoreAnimation-1': isTextAnimActive }">VOIR</span>
          <span :class="{ 'knwMoreAnimation-2': isTextAnimActive }">PLUS</span> -->
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import GridElement from "./GridElement.vue";
import GridHeader from "./GridHeader.vue";

import {
  cycliste,
  autoPortrait,
  boulangerieChaves,
  holistiqueCo02,
  logoCdfDepliantA4A,
  logoLaeticiaDepliantA4ACopie,
  logoNolex4,
  blue,
  lcj,
  sixFeet,
  societeInclusive,
  num5,
  fightCamp,
  vynil,
  liquidColors,
} from "@/utils/media";
import LetterFlip from "../letterFlip.vue";

export default {
  components: { GridElement, GridHeader, LetterFlip },
  name: "Grid",
  props: ["home"],
  data: function () {
    return {
      url_data: null,
      filter: "home",
      class: "containerGridHome",
      projectArray: [
        {
          name: "La ruche à velo",
          tag: ["branding", "illustration", "web", "home"],
          img: cycliste,
          format: "img",
          class: "LaRucheAVelo",
        },
        {
          name: "Le bleu & jaune",
          tag: ["branding", "graphisme", "illustration", "motion"],
          img: autoPortrait,
          format: "img",
          class: "LeBleuEtLeJaune",
        },
        {
          name: "Chaves",
          tag: ["branding", "édition", "graphisme", "illustration"],
          img: boulangerieChaves,
          format: "img",
          class: "chaves",
        },
        {
          name: "Holistique & co",
          tag: ["branding", "édition", "illustration"],
          img: holistiqueCo02,
          format: "img",
          class: "HolistiqueCo",
        },
        {
          name: "La colline",
          tag: ["branding", "édition"],
          img: logoCdfDepliantA4A,
          format: "img",
          class: "LaColine",
        },
        {
          name: "Laëtitia",
          tag: ["branding", "édition", "motion", "web"],
          img: logoLaeticiaDepliantA4ACopie,
          format: "img",
          class: "Laetitia",
        },
        {
          name: "Nolex",
          tag: ["branding", "motion", "web"],
          img: logoNolex4,
          format: "img",
          class: "Nolex",
        },
        {
          name: "BLUE",
          tag: ["édition", "graphisme"],
          img: blue,
          format: "img",
          class: "Blue",
        },
        {
          name: "LCJ",
          tag: ["édition", "illustration"],
          img: lcj,
          format: "img",
          class: "LCJ",
        },
        {
          name: "Sixfeet",
          tag: ["édition", "graphisme"],
          img: sixFeet,
          format: "img",
          class: "Sixfeet",
        },
        {
          name: "AlianceC",
          tag: ["édition", "illustration", "home"],
          img: societeInclusive,
          format: "img",
          class: "AlianceC",
        },
        {
          name: "N°",
          tag: ["graphisme"],
          img: num5,
          format: "img",
          class: "N",
        },
        {
          name: "Fight Camp",
          tag: ["graphisme", "illustration"],
          img: fightCamp,
          format: "img",
          class: "FightCamp",
        },
        {
          name: "Neue Ära",
          tag: ["graphisme", "illustration", "motion", "home"],
          img: vynil,
          format: "img",
          class: "NeueAra",
        },
        {
          name: "Liquid Colors",
          tag: ["motion", "web", "home"],
          img: liquidColors,
          format: "video",
          class: "LiquideColor",
        },
      ],
      isTextAnimActive: false,
      allCat: ['motion','illustration','branding','graphisme','édition','web']
    };
  },
  methods: {
    filterArray: function (filter) {
      this.filter = filter;
      this.classChange(filter);
    },
    classChange: function (filter) {
      switch (filter) {
        case "motion":
          this.class = "containerGridMotion";
          break;
        case "illustration":
          this.class = "containerGridIllustration";
          break;
        case "branding":
          this.class = "containerGridBranding";
          break;
        case "graphisme":
          this.class = "containerGridGraphisme";
          break;
        case "édition":
          this.class = "containerGridEdition";
          break;
        case "web":
          this.class = "containerGridWeb";
          break;
        case "home":
          this.class = "containerGridHome";
          break;

        default:
          this.class = "containerGridProjet";
          break;
      }
    },
    defaultClass: function () {
      this.class = this.home ? "containerGridHome" : "containerGridProjet";
      this.filter = this.home ? "home" : "";
    },
    mouseOverLink: function () {
      this.isTextAnimActive = true;
    },
    mouseLeaveLink: function () {
      this.isTextAnimActive = false;
    },
    arrow:function(next = false){
      let index = this.allCat.indexOf(this.filter)
      let result
      if(next){
        result = this.allCat[index+1] || this.allCat[0]
      } else {
        result = this.allCat[index-1] || this.allCat[this.allCat.length-1]
      }
      this.filter = result,
      this.classChange(this.filter);
    },
    scrollToTop: function () {
      window.scrollTo(0, 0);
    },
  },
  created() {
    this.url_data = this.$route.params.name;
    this.defaultClass();
    if(this.url_data !== '' && this.home !== true) {
      this.filter = this.url_data;
      this.classChange(this.filter);
    }
  },
};
</script>
