<template>
  <transition :name="'slide-' + this.direction">
    <div class="review-card__carousel-slide" v-show="visibleSlide === index">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ReviewCarouselSlide",
  data: () => {
    return {};
  },
  props: ["visibleSlide", "index", "direction"],
};
</script>
