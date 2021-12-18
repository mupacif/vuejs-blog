<template>
  <div class="home">
  <!-- Vue conditional to check if there is any content in document -->
  <div v-if="hasContent" class="page">
  
          <!-- Template for page description
          <p class="blog-description">{{ $prismic.richTextAsPlain(fields.description) }}</p> -->
          <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                <div class="container-fluid  flex-column">
                     <router-link to="/"  class="navbar-brand"> {{ $prismic.richTextAsPlain(fields.headline) }}</router-link>
                    <button class="navbar-toggler" 
                    type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                      <ul class="navbar-nav ml-auto  flex-column">
                        <li class="nav-item" v-for="post in sections" :key="post.id" v-bind:post="post">
                          <router-link  class="nav-link" :to="linkResolver(post)">{{ $prismic.richTextAsPlain(post.data.name) }} </router-link>
                        </li>
                      </ul>  
                    </div>
                </div>
          </nav> 
          <div class="home container">  
                <router-view  :key="$route.fullPath" />    
        </div>    
    </div>
    <div v-else class="home">
       <p> welcome xx </p>
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
.page{

}
#sidebar {

    width: 250px;
   
    height: 100vh;
    z-index: 999;
    transition: all 0.3s;
}
.left-menu{
  min-width : 300px;
}
.home {
  max-width: 100%;
  margin: auto;
  text-align: center;
}
.home .blog-avatar {
  height: 140px;
  width: 140px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  margin: 1em auto;
}
.home .blog-description {
  font-size: 18px;
  color: #9A9A9A;
  line-height: 30px;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  font-family: 'Lato', sans-serif;
  border-bottom: 1px solid #DADADA;
}
/* Media Queries */
@media (max-width: 767px) {
  .home {
    padding: 0 20px;
  }
}
</style>
