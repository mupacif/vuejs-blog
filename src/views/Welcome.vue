<template>
  <!-- Vue conditional to check if there is any content in document -->
  <div >
     {{ $prismic.richTextAsPlain(fields.homepage) }} 
  </div>
</template>


<script>
export default {
  name: 'welcome',
   data () {
    return {
      fields: {
        homepage: null
      }
    }
  },
  methods:{
    getContent () {
          //Query to get home content
          this.$prismic.client.getSingle('presentation')
            .then((document) => {
              if (document) {
                this.fields.homepage = document.data.homepage
              } else {
                //returns error page
                this.$router.push({ name: 'not-found' })
              }
            })
        }
  },
  created(){
    this.getContent ()
  }
}
</script>

<style scoped>
</style>
