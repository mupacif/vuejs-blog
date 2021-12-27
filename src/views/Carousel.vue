<template>
  <div class="main row">
     <slices-block lass="col" :slices="slices"/> 
      <footer class="col">
            <div > All images copyright.  </div>
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
        title: null,
        date: null,
      },
      slices: []
    }
  },
  methods: {
    getContent (uid) {
      debugger
      //Query to get post content
      this.$prismic.client.getByUID('section', uid)
        .then((doc) => {

          if (doc) {
     
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
}

    footer{
      margin-top: 30px;
      position: absolute;
      top: 0;
      left: 0;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      z-index: -900;
    }
</style>