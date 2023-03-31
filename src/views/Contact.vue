<template>
  <div class="mainContact">
    <NavBar :media="media" />
    <div class="container">
      <main class="containerContact">
        <div class="contact">
          <p class="line">
            Télephone:
            <a href="tel:0699790080">
              <strong>06 99 79 00 80</strong>
            </a>
          </p>
          <p class="line2">
            Mail: <a href="mailto:hello@pepenome.fr"><strong>hello@pepenome.fr</strong></a>
          </p>
          <p>
            Adresse:
            <a
              href="https://www.google.com/maps/place/94+Bd+des+Belges,+44300+Nantes/data=!4m2!3m1!1s0x4805ee8db6e26fe5:0xb5dd0fb05317a8a9?sa=X&ved=2ahUKEwj8-8uH6Iz5AhXR8IUKHYrlCWgQ8gF6BAgFEAE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>94 boulevard des belges <br />&emsp;&ensp;&ensp;&ensp;&ensp;&ensp;44300 NANTES</strong>
            </a>
          </p>
        </div>
        <div class="contacetezMoi">
          <p>ENVIE DE COLLABORER SUR UN NOUVEAU PROJET ?</p>
          <h2 class="contactanimation">
            <LetterFlip word="CONTACTEZ MOI !" class="animContact" />
          </h2>
        </div>
      </main>
      <SocialMedia class="socialLink" />
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SocialMedia from "@/components/SocialMedia.vue";
import Footer from "@/components/Footer.vue";
import { contactHeader } from "@/utils/media.js";
import LetterFlip from "../components/letterFlip.vue";

export default {
  name: "contact",
  components: {
    NavBar,
    SocialMedia,
    Footer,
    LetterFlip
  },
  data: function () {
    return {
      media: {
        name: "image de contact stylisée",
        type: "img",
        asset: contactHeader,
        class: "contactLogo",
      },
      test:'CONTACTEZ MOI'
    };
  },
};
</script>
