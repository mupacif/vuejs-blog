<template>
  <!-- Vue conditional to check if there is any content in document -->
  <div  >
          <prismic-rich-text class="textslice" :field="information"/>
  </div>
</template>


<script>
export default {
  name: 'information',
  data () {
    return {
      information:'',

    }
  },
   created () {
        this.$prismic.client.getSingle('presentation')
        .then((document) => {
          if (document) {
                this.information = document.data.information;
          } else {
            //returns error page
            this.$router.push({ name: 'not-found' })
          }
        })
  }
}

</script>

<style scoped>
</style>
