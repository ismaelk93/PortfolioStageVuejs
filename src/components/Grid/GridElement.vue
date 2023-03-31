<template>
  <div v-if="this.filter ? this.project.tag.includes(this.filter) : true" :class="`gridItems ${this.project.class}`">
    <img v-if="this.project.format === 'img'" :alt="this.project.name" :src="this.project.img" />
    <video v-else :src="this.project.img" loop="infinite" autoplay="autoplay" muted="" />
    <div class="text-over">
      <router-link :to="{ name: 'detail', params: { name: this.project.name.replaceAll(' ', '-') } }" @click="scrollToTop">
        <h3>{{ this.project.name }}</h3>
        <p>{{ this.tag.join(", ") }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridElement",
  props: ["project", "filter"],
  data() {
    return {
      tag: [],
    };
  },
  methods: {
    getTag() {
      this.tag = this.project.tag.filter((tag) => tag !== "home");
    },
    scrollToTop: function () {
      window.scrollTo(0, 0);
    },
  },
  created() {
    this.getTag();
  },
};
</script>
