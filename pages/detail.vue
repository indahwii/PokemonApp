<template>
  <div>
    <Navbar />
    <section>
      <div class="container">
        <div class="row mb-5 mt-5">
          <div class="col-12">
            <div class="text-center mb-5">
              <h2 class="mb-5">
                {{ details.name }}
              </h2>
              <img :src="details.sprites.other.dream_world.front_default" class="img-fluid">
            </div>
            <h5 class="mb-3">
              Weight : <span> {{ details.weight }} </span>
            </h5>
            <h5 class="mb-3">
              Species : <span> {{ details.species.name }} </span>
            </h5>
            <h5>
              Ability :
            </h5>
            <div class="row mb-3">
              <div v-for="item in details.abilities" :key="item.index" class="col-1">
                <b-badge variant="dark">
                  {{ item.ability.name }}
                </b-badge>
              </div>
            </div>
            <h5 class="mb-3">
              Type :
            </h5>
            <div v-for="item in details.types" :key="item.index">
              <b-badge variant="dark">
                {{ item.type.name }}
              </b-badge>
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
  filters: {},
  data () {
    return {
      products: [],
      ability: {}
    }
  },
  computed: {
     // function for show detail pokemon
    ...mapState('detail', {
      details: state => state.detailProduct
    })
  },
  mounted () {
    // this.getAbility()
  },
  methods: {
    // getAbility () {
    //   this.$axios.get(this.ability)
    //   .then((res) => {
    //     console.log(res)
    //   })
    // }
  }
}
</script>

<style lang="sass" scoped>

  .bg-blue
    color: #2a2a72

</style>
