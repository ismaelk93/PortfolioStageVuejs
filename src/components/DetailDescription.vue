<template>
  <slot>
    <div class="project-text-initial-box">
      <section class="project-text-box">
        <h1 :class="this.class" >{{ this.description.nameOfProject }}</h1>
        <article class="project-text-box__navbar">
          <h2 v-for="tag1 of this.description.tag1" :key="tag1">
            <router-link :to="{ name: 'projet', params: { name: tag1 } }"> {{ tag1 }} </router-link>
          </h2>
        </article>
        <h3>{{ this.description.mission }}</h3>
        <p v-for="mission of this.description.missionDesc" :key="mission">{{ mission }}</p>
        <aside class="project-text-box__tags2-box">
          <h2 v-for="tag2 of this.description.tag2" :key="tag2"> {{ tag2 }} </h2>
        </aside>
      </section>
    </div>
  </slot>
</template>

<script>
export default {
  name: "DetailDescription",
  props: ["description"],
  data: function () {
    return {
      url_data: null,
      class: '',
    }
  },
  methods: {
    addProjectN7Class: function() {
      if(this.url_data === 'N°'){
        this.class = 'project-text-box__h1-number'
      }
    }
  },
  mounted() {
    this.url_data = this.$route.params.name;
    this.addProjectN7Class();
  }
};
</script>
