<template>
    <section>
        <!-- Slice section template -->
        <section v-for="(slice, index) in slices" :key="'slice-' + index">
                <image-slider-slice :slices="slice"></image-slider-slice>
       
        </section>
    </section>
</template>

<script>
// Imports for all slices
import ImageSliderSlice from './slices/ImageSliderSlice.vue'

export default {
  props: ['slices'],
  name: 'slices-block',
  components: {
    ImageSliderSlice
  },
  created(){
  }
}
</script>