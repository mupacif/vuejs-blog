<template>
  <div class="container-fluid overflow-hidden ">
  <!-- Vue conditional to check if there is any content in document -->
  <div v-if="hasContent" class="row overflow-auto vh-100  ">
  
          <!-- Template for page description
          <p class="blog-description">{{ $prismic.richTextAsPlain(fields.description) }}</p> -->
          <nav class="col-12 col-sm-3   col-xl-2 navbar navbar-expand-sm navbar-light d-flex flex-sm-column  bg-sm-dark  " id="navbarTop">
                <div class="container align-items-sm-start d-flex flex-sm-column mt-sm-5 ">
          
                     <router-link to="/"  class="navbar-brand"> {{ $prismic.richTextAsPlain(fields.headline) }}</router-link>
                    <button class="navbar-toggler" 
                    type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                      <ul class="navbar-nav  flex-sm-column">
                        <li class="nav-item" v-for="post in sections" :key="post.id" v-bind:post="post">
                          <router-link  class="nav-link mx-1" :to="linkResolver(post)">{{ $prismic.richTextAsPlain(post.data.name) }} </router-link>
                        </li>
                        <li class="nav-item" >
                          <router-link  class="nav-link" to="/information">Information </router-link>
                        </li>
                        <li class="nav-item">
                          <a :href=this.fields.instagram  class="nav-link" target="_blank" rel="noopener noreferrer">instagram</a>
                        </li>
                      </ul>  
                    </div>
                </div>
          </nav> 
          
          <div class="col d-flex flex-column  home">  
            <main class="row overflow-auto">
                <router-view  :key="$route.fullPath" />    
              </main>
                 <footer class="row mt-auto">
                  <div class="col-6"> All images copyright.  </div>
              </footer> 
        </div>   
   
    </div>
    <div v-else class="home">
       <p> loading </p>
    </div>
  </div>
  <!-- If no content return message -->
 
</template>

<script>
import SlicesBlock from '../components/SlicesBlock.vue'
export default {
  name: 'blog-home',
  components: {
    SlicesBlock
  },
  data () {
    return {
      sect:'',
      sections: [],
      documentId: '',
      fields: {
        headline: null,
        description: null,
        instagram: null,
        image: null
      },
      posts: [],
      linkResolver: this.$prismic.linkResolver,
      hasContent: false
    }
  },
  methods: {

    getSections (){
        this.$prismic.client.query(
                this.$prismic.Predicates.not('document.type', "presentation")
            ).then((response) => {
              this.sections = response.results;
            })
    },
    getContent () {
      //Query to get home content
      this.$prismic.client.getSingle('presentation')
        .then((document) => {
          if (document) {
            this.fields.headline = document.data.name
            this.fields.description = document.data.decription_site
            this.fields.instagram = document.data.instagram.url
            this.checkForContent()

          } else {
            //returns error page
            this.$router.push({ name: 'not-found' })
          }
        })
    },    checkForContent(){
      if (
        this.$prismic.richTextAsPlain(this.fields.headline) !== "" ||
        this.$prismic.richTextAsPlain(this.fields.description) !== ""
      ) {
        this.hasContent = true;
      }
    },
  },
  created () {
    this.getContent()
    this.getSections ()
  }
}
</script>

<style scoped>

.home {
  max-width: 100%;
  margin: 100px auto 0 auto;
  text-align: center;
}
#navbarTop{
  padding:0px !important;
}
</style>
