<template>
  <div>
    <Navbar />
    <section class="bg-blue">
      <div>
        <br><br>
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-12">
              <h1 class="font-weight-bold">
                Your Favorite Pokemon
              </h1>
              <br>
            </div>
          </div>
          <br><br>
        </div>
        <br>
      </div>
      <div class="mt-5 mb-5">
        <div class="container">
          <div class="row">
            <div v-for="data in favorite" :key="data.index" class="col-12 col-md-4 mb-2 mt-2 text-center">
              <b-card
                class="card-list"
              >
                <b-card-body
                  @click="getDetail(data.name)"
                >
                  <b-card-title>{{ data.name }}</b-card-title>
                  <img src="/pokeball.png" width="50%">
                </b-card-body>
                <template #footer>
                  <div @click="addFav(data.index, data.name, data.url)">
                    Like <img src="/love.png" width="6%"> {{ data.index }}
                  </div>
                </template>
              </b-card>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Bottom />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
  },
  filters: {
  },
  data () {
    return {

    }
  },
  computed: {
    // function for show list favorite
    ...mapState('favorite', {
      favorite: state => state.product
    })
  },
  mounted () {
  },
  methods: {
    // function for show detail , with vuex 
    getDetail (key) {
      this.loading = true
      this.$router.push('/detail?params=' + key)
      this.$store.dispatch('detail/getDetail', key)
    },
    // function add favorite with vuex 
    addFav (id, name, url) {
      this.selected = {
        id,
        name,
        image: url
      }
      this.$store.commit('favorite/setFavorite', this.selected)
      alert('Data berhasil di tambahkan')
    }
  }
}
</script>

<style lang="sass" scoped>

  .bg-blue

    background-color: #2a2a72
    background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)
    color: white
    padding-top: 5rem
    padding-bottom: 5rem

  .card-list
    background-color: #f39f86
    background-image: linear-gradient(315deg, #f39f86 0%, #f9d976 74%)
    border-radius: 6px
    box-shadow: 2px 2px 0px 0px #f5f5f5

</style>
