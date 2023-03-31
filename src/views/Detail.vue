<template>
  <NavBar v-if="this.url_data !== ''" :media="this.projectData[this.url_data].banner" />
  <DetailDescription v-if="this.url_data !== ''" :description="this.projectData[this.url_data].description" />
  <DetailImage v-if="this.url_data !== ''" :image="this.projectData[this.url_data].assets" :class="this.projectData[this.url_data].containerClass" />
  <MainFooter v-if="this.blackFooter.includes(this.url_data)" class='main-footer__up--black'/>
  <MainFooter v-else="this.blackFooter.includes(this.url_data)"/>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import DetailDescription from "@/components/DetailDescription.vue";
import DetailImage from "@/components/DetailImage.vue";
import MainFooter from "@/components/MainFooter.vue";

import {
  carte,
  flyer,
  instagram,
  logo2,
  laetitiaBanner,
  mockup,
  mockup2,
  bannière,
  blueBanner,
  triptique,
  paysage,
  les4sixfeet,
  gif,
  sixfeetBanner,
  perso1,
  perso2,
  perso3,
  perso4,
  perso5,
  perso6,
  perso7,
  numberBanner,
  actualités,
  collectivité,
  cyclistelaruche,
  hello,
  laruche,
  logo2laruche,
  pageerror,
  pyctogramme,
  siteinternet,
  veloBanner,
  behancemawen,
  dessinmawen,
  mockupmawen,
  propo1,
  vynilneu,
  neueAraBanner,
  squelette,
  basdepage,
  logonolex2,
  chartegraph,
  precomp,
  maquettenolex,
  vague,
  nolex,
  nolexBanner,
  identity,
  logochaves,
  packaging,
  chavesBanner,
  autoPortraitbleu,
  logobleu,
  imgbleu,
  bleuJauneBanner,
  illubox,
  mockupbox,
  illu2box,
  facebox,
  face2box,
  boxingCultureBanner,
} from "@/utils/media";

export default {
  name: "Detail",
  components: {
    NavBar: NavBar,
    MainFooter: MainFooter,
    DetailDescription: DetailDescription,
    DetailImage: DetailImage,
  },
  props: ["project"],
  data: function () {
    return {
      url_data: "",
      blackFooter:["BLUE"],
      selectedBanner: [],
      selectedDesc: [],
      class: "",
      projectData: {
        "Laëtitia":{
          banner: {
            name: "Laëtitia",
            type: "img",
            asset: laetitiaBanner,
            class: "project-banner__img",
          },
          description: {
            name: "Laëtitia",
            nameOfProject: "Laëtitia Sophrologie",
            tag1: ["motion", "web", "branding", "édition"],
            mission: "Créer l'indentité de marque de Laëtitia Sophrologue à DINAN.",
            missionDesc: [
              "Concept visuel tout en poésie, symbolisé par une bulle de bien-être. Créer une identité à la fois élégante et légère qui symbolise l'ambiance apaisante de la sophrologie et de ses bienfaits.",
              "Un univers aux couleurs douces et réconfortantes, des éléments graphiques qui rappellent la nature, la mer, le vent et la terre",
            ],
            tag2: [
              "identité visuelle - logotype - carte de visite - flyer - motion design",
              "community management - after effect - adobe illustrator - photoshop - réseaux sociaux",
            ],
          },
          containerClass: "containerProjectLAETITIA",
          assets: [
            {
              img: carte,
              class: "carteLAETITIA",
              format: "img",
            },
            {
              img: logo2,
              class: "logoLAETITIA",
              format: "img",
            },
            {
              img: flyer,
              class: "flyerLAETITIA",
              format: "img",
            },
            {
              img: instagram,
              class: "instaLAETITIA",
              format: "img",
            },
          ],
        },
        "BLUE": {
          banner: { name: "BLUE", type: "img", asset: blueBanner, class: "project-banner__img" },
          description: {
            name: "BLUE",
            nameOfProject: "BLUE",
            tag1: ["graphisme", "édition"],
            mission: "Création d'illustrations sous forme d'affiches pour le salon de coiffure \"Blue\" à Bordeaux.",
            missionDesc: [
              "La gérante souhaitait un visuel floral aux couleurs de son enseigne pour intégrer sur les murs de son salon et dans sa communication.",
            ],
            tag2: ["graphisme - affiche - illustration - aquarelle - dessin", "photoshop - édition - print"],
          },
          containerClass: "containerProjectBLUE",
          assets: [
            {
              img: mockup,
              class: "mockupBLUE",
              format: "img",
            },
            {
              img: mockup2,
              class: "mockup2BLUE",
              format: "img",
            },
            {
              img: bannière,
              class: "bannièreBLUE",
              format: "img",
            },
          ],
        },
        "Sixfeet": {
          banner: {
            name: "Sixfeet",
            type: "video",
            asset: sixfeetBanner,
            class: "project-banner__video",
          },
          description: {
            name: "Sixfeet",
            nameOfProject: "Six Feet Galerie",
            tag1: ["graphisme", "édition"],
            mission: "Projet de fin d'études (fictif) pour la marque Six feet Galerie.",
            missionDesc: [
              "Nouvel objectif pour la marque spécialisée dans la photographie sport de glisse qui souhaite atteindre une nouvelle cible d'amateurs d'Art et de photo grâce à des tirages en édition très limitée.",
              "Création d'une campagne d'affichage dans un style \"lifestyle\".",
            ],
            tag2: ["graphisme - photo - affiche - collage - illustrator", "photoshop - édition - print - mise en page"],
          },
          containerClass: "containerProjectSIXFEET",
          assets: [
            {
              img: triptique,
              class: "triptiqueSIX",
              format: "img",
            },
            {
              img: paysage,
              class: "paysageSIX",
              format: "img",
            },
            {
              img: les4sixfeet,
              class: "les4SIX",
              format: "img",
            },
            {
              img: gif,
              class: "gifSIX",
              format: "img",
            },
          ],
        },
        "N°": {
          banner: { name: "N°", type: "video", asset: numberBanner, class: "project-banner__video" },
          description: {
            name: "N°",
            nameOfProject: "N°7",
            tag1: ["graphisme"],
            mission: "Concept de visuels et Packaging pour étiquette de bouteilles de vins fictifs.",
            missionDesc: [],
            tag2: ["graphisme - étiquettes - collage - peinture", "photoshop - packaging - illustrator"],
          },
          containerClass: "containerProjectN°",
          assets: [
            {
              nameOfImage: "n1",
              img: perso1,
              class: "N°1",
              format: "img",
            },
            {
              nameOfImage: "n2",
              img: perso2,
              class: "N°2",
              format: "img",
            },
            {
              nameOfImage: "n3",
              img: perso3,
              class: "N°3",
              format: "img",
            },
            {
              nameOfImage: "n4",
              img: perso4,
              class: "N°4",
              format: "img",
            },
            {
              nameOfImage: "n5",
              img: perso5,
              class: "N°5",
              format: "img",
            },
            {
              nameOfImage: "n6",
              img: perso6,
              class: "N°6",
              format: "img",
            },
            {
              nameOfImage: "n7",
              img: perso7,
              class: "N°7",
              format: "img",
            },
          ],
        },
        "La-ruche-à-velo": {
          banner: { name: "La-ruche-à-velo", type: "video", asset: veloBanner, class: "project-banner__video" },
          description: {
            name: "La-ruche-à-velo",
            nameOfProject: "La ruche à velos",
            tag1: ["web", "branding", "illustration"],
            mission: "Refonte de l'identité de marque de La ruche à vélos.",
            missionDesc: [
              "Refonte complète du logo ainsi que de la charte graphique",
              "Création de l'identité visuelle à travers des illustrations et des pictogrammes ainsi que le design du site internet.",
            ],
            tag2: ["identité visuelle - logotype - illustration - webdesign - maquettes", "illustrator - photoshop - adobe xd"],
          },
          containerClass: "containerProjectLARUCHE",
          assets: [
            {
              img: logo2laruche,
              class: "logoLARUCHE",
              format: "img",
            },
            {
              img: cyclistelaruche,
              class: "cyclisteLARUCHE",
              format: "img",
            },
            {
              img: pageerror,
              class: "pageerrorLARUCHE",
              format: "img",
            },
            {
              img: laruche,
              class: "laruche",
              format: "img",
            },
            {
              img: pyctogramme,
              class: "pyctoLARUCHE",
              format: "img",
            },
            {
              img: hello,
              class: "helloLARUCHE",
              format: "img",
            },
            {
              img: collectivité,
              class: "collectivitéLARUCHE",
              format: "img",
            },
            {
              img: siteinternet,
              class: "siteinternetLARUCHE",
              format: "img",
            },
            {
              img: actualités,
              class: "actualitésLARUCHE",
              format: "img",
            },
          ],
        },
        "Neue-Ära": {
          banner: { name: "Neue-Ära", type: "video", asset: neueAraBanner, class: "project-banner__video" },
          description: {
            name: "Neue-Ära",
            nameOfProject: "Neue Ära",
            tag1: ["graphisme", "motion", "illustration"],
            mission: "Réalisation d'une pochette d'album pour l'artiste MAWEN.",
            missionDesc: [
              "Ce DJ aux influences électroniques / technos m'a demandé de réaliser un visuel pour illustrer son EP (extended play).",
              "Il souhaitait illustrer son projet par un homme et son squelette, dans un univers au couleur flash style affiche techno Berlinoise.",
            ],
            tag2: ["graphisme - illustration - motion design - pochette - dessin", "photoshop - after effect - procreate"],
          },
          containerClass: "containerProjectNEUE",
          assets: [
            {
              img: propo1,
              class: "propoNEUE",
              format: "img",
            },
            {
              img: basdepage,
              class: "videoNEUE",
              format: "mp4",
            },
            {
              img: dessinmawen,
              class: "dessinNEUE",
              format: "img",
            },
            {
              img: vynilneu,
              class: "vynilNEUE",
              format: "img",
            },
            {
              img: squelette,
              class: "squeletteNEUE",
              format: "mp4",
            },
            {
              img: mockupmawen,
              class: "mockupNEUE",
              format: "img",
            },
            {
              img: behancemawen,
              class: "behanceNEUE",
              format: "img",
            },
          ],
        },
        'Nolex': {
          banner: { name: "Nolex", type: "video", asset: nolexBanner, class: "project-banner__video" },
          description: {
            name: "Nolex",
            nameOfProject: "Nolex",
            tag1: ["web", "branding", "motion"],
            mission: "Refonte de l'identité de marque de Nolex.",
            misionDesc: [
              "Créer une nouvelle identité graphique, avec une nouvelle charte pour un rendu plus design et professionel.",
              "Réalisation de visuels et motion pour les réseaux sociaux et la nouvelle maquette du site internet.",
            ],
            tag2: [
              "logotype - identité de marque - branding - motion design - web - webdesign",
              "maquette - site internet - community management - photoshop - after effect - illustrator",
            ],
          },
          containerClass: "containerProjectNOLEX",
          assets: [
            {
              img: logonolex2,
              class: "logoNOLEX",
              format: "img",
            },
            {
              img: chartegraph,
              class: "charteNOLEX",
              format: "img",
            },
            {
              img: precomp,
              class: "precompNOLEX",
              format: "mp4",
            },
            {
              img: maquettenolex,
              class: "maquetteNOLEX",
              format: "img",
            },
            {
              img: vague,
              class: "vagueNOLEX",
              format: "img",
            },
            {
              img: nolex,
              class: "nolexNOLEX",
              format: "img",
            },
          ],
        },
        "Chaves": {
          banner: { name: "Chaves", type: "video", asset: chavesBanner, class: "project-banner__video" },
          description: {
            name: "Chaves",
            nameOfProject: "Boulangerie Chaves",
            tag1: ["illustration", "branding", "graphisme", "édition"],
            mission: "Refonte de l'identité de marque de la boulangerie CHAVES à Dinan.",
            missionDesc: [
              "Le clien souhaitait redonner vie à son logo qui datait de plus de 20 ans. La mascotte de la boulangerie",
              "étant l'écureuil, il souhaitait la mettre en avant dans sa communication.",
            ],
            tag2: ["logotype - branding - graphisme", "affiche - illustration - dessin - print - édition"],
          },
          containerClass: "containerProjectCHAVES",
          assets: [
            {
              img: identity,
              class: "idCHAVES",
              format: "img",
            },
            {
              img: logochaves,
              class: "logoCHAVES",
              format: "img",
            },
            {
              img: packaging,
              class: "packCHAVES",
              format: "img",
            },
          ],
        },
        "Le-bleu-&-jaune": {
          banner: { name: "Le-bleu-&-jaune", type: "video", asset: bleuJauneBanner, class: "project-banner__video" },
          description: {
            name: "Le-bleu-&-jaune",
            nameOfProject: "Le bleu & le jaune",
            tag1: ["motion", "illustration", "branding", "graphisme"],
            mission: "Création d'un compte collab entre Lucille DC également Graphiste frelance et moi-même.",
            missionDesc: [
              "Nous avons créé un univers à notre image et représentatif de nos couleurs,",
              "pour Lucille le bleu pour moi le jaune. C'est un compte où on y dévoile nos créations, notre patte graphique.",
            ],
            tag2: [
              "logotype - branding - motion design - animation 2D - frame by frame - graphisme",
              "affiche - illustration - dessin - inspiration",
            ],
          },
          containerClass: "containerProjectLEBLEU",
          assets: [
            {
              img: imgbleu,
              class: "imgLEBLEU",
              format: "img",
            },
            {
              img: autoPortraitbleu,
              class: "autoPortraitLEBLEU",
              format: "img",
            },
            {
              img: logobleu,
              class: "logoLEBLEU",
              format: "img",
            },
          ],
        },
        "Fight-Camp": {
          banner: { name: "Fight-Camp", type: "video", asset: boxingCultureBanner, class: "project-banner__video" },
          description: {
            name: "Fight-Camp",
            nameOfProject: "Boxing Culture",
            tag1: ["illustration", "graphisme"],
            mission:
              "Création d'illustrations pour un évènement à New-York intitulé \"Fight Camp\" ainsi que d'autres éléments graphiques pour la marque Boxing Culture.",
            missionDesc: [
              "L'illustration rassemble le milieu de la boxe avec Mohammed Ali et",
              "la statue de la liberté représente la ville de New-York.",
            ],
            tag2: ["graphisme - affiche - illustration - dessin - procreate", "dessin technique - adobe illustrator"],
          },
          containerClass: "containerProjectBOXING",
          assets: [
            {
              img: illu2box,
              class: "illu2BOXING",
              format: "img",
            },
            {
              img: illubox,
              class: "illuBOXING",
              format: "img",
            },
            {
              img: mockupbox,
              class: "mockupBOXING",
              format: "img",
            },
            {
              img: facebox,
              class: "faceBOXING",
              format: "img",
            },
            {
              img: face2box,
              class: "face2BOXING",
              format: "img",
            },
          ],
        },
      },
    };
  },

  methods: {
    
  },
  mounted() {
    this.url_data = this.$route.params.name;
    console.log(this.projectData[this.url_data].assets[0].containerClass)
  },
};
</script>
