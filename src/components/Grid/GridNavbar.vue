<template>
  <div class="hp-navbar">
    <h3 v-for="element in elements" :key="element.name" :class="this.filter === element.name ? 'nav-hp opacity' : 'nav-hp'" @click="this.filterArray(element.name)">{{element.label}}</h3>
  </div>
</template>

<script>
export default {
  name: 'GridNavbar',
  props:{
    filterArray:{type:Function},
    filter:{type:String}
  },
  data:function(){
      return{
          elements:[
              { name:'motion', label:'MOTION DESIGN'},
              { name:'illustration', label:'ILLUSTRATION'},
              { name:'branding', label:'BRANDING'},
              { name:'graphisme', label:'GRAPHISME'},
              { name:'édition', label:'ÉDITION'},
              { name:'web', label:'WEB'},
          ]
      }
  }
}
</script>