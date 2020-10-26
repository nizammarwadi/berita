<template>
  <div class="mt-5">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="card col-md-6">
            <img :src="dataCurrentNews.urlToImage" alt="Card image cap" class="img-fluid">
            <p class="card-text"><small class="text-muted">{{ dataCurrentNews.publishedAt }} - {{ dataCurrentNews.author }}</small></p>
            <h5 class="card-title">{{ dataCurrentNews.title }}</h5>
            <p class="card-text">{{ dataCurrentNews.description }}</p>
            <p>
                sumber:
                <a :href="dataCurrentNews.url">{{ dataCurrentNews.url }}</a>
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return  {
      dataCurrentNews: {},
      idNews: 0
    }
  },
  mounted() {
    this.idNews = this.$route.query.id
    this.getDataCurrentNews()
  },
  methods: {
    getDataCurrentNews() {
      axios.get(`https://beritaku-api.herokuapp.com/articles/${this.idNews}`)
      .then(res => {
        this.dataCurrentNews = res.data
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style>
.img-fluid {
    object-fit: cover;
}
@media (max-width: 768px) {  
  .card {
    width: 100%;
  }
}
</style>