<template>
  <div id="carouselControls" class="carousel slide  carousel-dark" data-bs-ride="carousel" >
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(img, index) in images" :key="'slice-' + index"  v-bind:class="{ active: index==0 }">
            <img :src=img.image.url class="imgSized " alt="...">
        </div>
      </div> 
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>   
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
    this.images = this.slices.items;
  
  }
}
</script>

<style scoped>
.carou {
  display:flex;
  flex-direction: row;
}
.block-img{
  width:200px;
}

.imgSized{
  max-width: 500px;
}

</style>
