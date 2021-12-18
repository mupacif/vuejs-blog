<template>
  <div class="carou" >
      <div class="block-img">
          <prismic-image v-for="img in images" :field="img.image"/> 
      </div>    
  </div>
</template>

<script>
export default {
  props: ['slices'],
  name: 'image-slider-slice',
  data: function() {
    return {
      images : ''
    }
  },
  created () {
    debugger
     //this.images = this.slices.items;
  
  }
}
</script>

<style scoped>
.carou {
  display:flex;
  flex-direction: row;
}

</style>
