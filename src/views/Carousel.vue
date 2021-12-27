<template>
  <div class="main row " >
     <slices-block lass="col" :slices="slices"/> 
      <footer class="col">
            <div > {{ fields.copyright.text  }}  </div>
        </footer> 
  </div>
</template>

<script>
//Importing all the slices components
import SlicesBlock from '../components/SlicesBlock.vue'

export default {
  name: 'carousel',
  components: {
    SlicesBlock
  },
  data () {
    return {
      dateOptions: { year: 'numeric', month: 'short', day: '2-digit' },
      documentId: '',
      fields: {
          copyright : null
      },
      slices: []
    }
  },
  methods: {
    getContent (uid) {

      //Query to get post content
      this.$prismic.client.getByUID('section', uid)
        .then((doc) => {

          if (doc) {
            this.fields.copyright = doc.data.copyright[0]
            this.slices = doc.data.body
          } 
          else {
            //returns error page
            this.$router.push({ name: 'not-found' })
          }
        })
    }
  },
  created () {
    this.getContent(this.$route.params.uid)
  },
  beforeRouteUpdate (to, from, next) {
    this.getContent(to.params.uid)
    next()
  }
}
</script>

<style>

.main {
    position: relative;
    right:-30px;
}
footer{
  z-index: -900;
  color:grey;
}
@media (min-width: 576px) {
    footer{
      margin-top: 30px;
      position: absolute;
      top: 35%;
      left: 0;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      z-index: -900;
      color: rgb(180, 180, 180);
    }

}
  
</style>