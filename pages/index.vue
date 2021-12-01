<template>
  <div>
    <Navbar />
    <section class="bg-blue">
      <div>
        <br><br>
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-12">
              <img src="/pokemon-logo.png" class="img-fluid">
            </div>
            <div class="col-md-12 col-12">
              <br>
              <br>
              <h1 class="font-weight-bold">
                Check The Pokemon
              </h1>
              <br>
              <span>Let's Explore !!</span><br>
              <span>Click and show your pokemon ..</span>
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
            <div v-for="data in list" :key="data.index" class="col-12 col-md-4 mb-2 mt-2 text-center">
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
export default {
  components: {
  },
  filters: {
  },
  data () {
    return {
      loading: false,
      list: [],
      pokedata: []
    }
  },
  computed: {
  },
  mounted () {
    this.getList()
  },
  methods: {
     // function for show list pokemon
    getList () {
      this.$axios.get('/pokemon')
        .then((res) => {
          this.list = res.data.results
          this.list.forEach((e) => {
            // console.log('p' + JSON.stringify(e))

            this.url = JSON.stringify(e.url)
            this.getPokemonData(this.url)
          })
        })
    },
     // function nested pokemon image 
    getPokemonData (data) {
      const url = data.substr(34, 3)

      this.$axios.get('/pokemon' + url)
        .then((res) => {
          const datas = JSON.stringify(res.data)
          this.pokedata = datas
        })
    },
     // function for get detail the pokemon 
    getDetail (key) {
      this.loading = true
      this.$router.push('/detail?params=' + key)
      this.$store.dispatch('detail/getDetail', key)
    },
     // function for add to favorite 
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
