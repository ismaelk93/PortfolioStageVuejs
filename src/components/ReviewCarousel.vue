<template>
  <div class="review-card__carousel">
    <slot> </slot>
    <button @click.prevent="nextSlide" class="review-carousel__nav review-carousel__next">
      <font-awesome-icon icon="fa-solid fa-chevron-right" />
    </button>
    <button @click.prevent="prevSlide" class="review-carousel__nav review-carousel__prev">
      <font-awesome-icon icon="fa-solid fa-chevron-left" />
    </button>
  </div>
</template>

<script>
export default {
  name: "ReviewCarousel",
  methods: {
    nextSlide: function () {
      this.$emit("nextSlide");
    },
    prevSlide: function () {
      this.$emit("prevSlide");
    },
  },
};
</script>
