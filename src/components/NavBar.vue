<template>
  <header>
    <div class="navBar">
      <router-link to="/" class="home-link" @click="scrollToTop">
        <img src="@/assets/img/Logo-Pepenome1.png" alt="logo pepenome" class="logo-pepenome" />
      </router-link>
      <ul class="navs hidden" id="navbar">
        <li><router-link to="/projets" @click="scrollToTop">MES PROJETS</router-link></li>
        <li><router-link to="/about" @click="scrollToTop">À PROPOS</router-link></li>
        <li><router-link to="/contact" @click="scrollToTop">CONTACT</router-link></li>
      </ul>
      <img src="@/assets/img/menu-hamburger.png" class="menuBurger" alt="" @click="hamburger_menu" />
    </div>
    <div :class="this.class">
      <!-- <slot></slot> -->
      <!-- <video v-else autoplay="autoplay" muted="" loop="infinite" src="" alt=""></video> -->
      <video v-if="this.media.type === 'video'" autoplay="autoplay" muted="" loop="infinite" :src="this.media.asset" :alt="this.media.name"></video>
      <img v-else :class="this.media.class" :src="this.media.asset" :alt="this.media.name" />
    </div>
  </header>
</template>

<script>
export default {
  name: "navbar",
  data: function () {
    return {
      show: false,
    };
  },
  props: {
    media: {
      type: Object,
    },
    class:{
      type:String,
      default:'mediaHeader'
    }
  },
  methods: {
    hamburger_menu: function () {
      this.show = !this.show;
      if (this.show) {
        document.getElementById("navbar").classList.remove("hidden");
      } else {
        document.getElementById("navbar").classList.add("hidden");
      }
    },
    scrollToTop: function () {
      window.scrollTo(0, 0);
    },
  },
};
</script>
