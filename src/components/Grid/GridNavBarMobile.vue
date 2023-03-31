<template>
  <div class="hp-navbar-mobile">
      <button class="btn" @click="this.arrow()"><font-awesome-icon icon="fa-solid fa-chevron-left" /></button>
      <p>{{ this.filter || "Projets" }}</p>
      <button class="btn" @click="this.arrow(true)"><font-awesome-icon icon="fa-solid fa-chevron-right" /></button>
    </div>
</template>

<script>
export default {
    name:'GridNavBarMobile',
    props:{
        arrow: { type: Function },
        filter: {type: String}
    }
}
</script>

<style scoped>
.btn{
    cursor: pointer;
}
</style>