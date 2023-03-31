<template>
  <ContactContainer :class="this.class" />
  <Footer />
</template>

<script>
import Footer from "./Footer.vue";
import ContactContainer from "./ContactContainer.vue";
export default {
  components: {
    Footer,
    ContactContainer,
  },
  name: "MainFooter",
  props: {
    class: {
      default: "main-footer__up",
      type: String,
    },
  },
};
</script>
