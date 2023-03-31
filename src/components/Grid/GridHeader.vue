<template>
  <div class="hp-container">
      <div class="hp-head">
        <p>PEPENOME</p>
        <br />
        <router-link to="/projets" @click="scrollToTop">
            <h2 class='border-bottom'>
                <LetterFlip word="MES PROJETS"/>
            </h2>
        </router-link>
        <br />
      </div>
      <GridNavbar :filterArray="this.filterArray" :filter="this.filter"></GridNavbar>
    </div>
    <GridNavBarMobile :arrow="this.arrow" :filter="this.filter" />
</template>

<script>
import GridNavBarMobile from './GridNavBarMobile.vue'
import GridNavbar from './GridNavbar.vue'
import LetterFlip from '../letterFlip.vue';
export default {
    name:'GridHeader',
    props: {
        arrow:{type:Function},
        filter:{type:String},
        filterArray:{type:Function}
    },
    components: { GridNavBarMobile, GridNavbar, LetterFlip},
    methods:{
        scrollToTop: function () {
            window.scrollTo(0, 0);
        }
    }
}
</script>