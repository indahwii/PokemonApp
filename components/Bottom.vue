<template>
  <div>
    <div class="bottom-nav">
      <nuxt-link v-for="nav in navs" :key="nav.index" class="link" :to="nav.path">
        <span :class="nav.icon" class="icon" />
        <span class="title">{{ nav.title }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      active: 0,
      navs: [
        { icon: 'ti-home', title: 'Home', path: '/' },
        { icon: 'ti-search', title: 'search', path: '/search' },
        { icon: 'ti-heart', title: 'Favorite', path: '/favorite' },
        { icon: 'ti-user', title: 'Profile', path: '' }
      ]
    }
  },
  computed: {
    activePath () {
      return this.$route.path
    }
  },
  mounted () {
  },
  methods: {
  }

}
</script>

<style lang="sass">

.bottom-nav
    height: 50px
    justify-content: space-around
    background-color: white
    position: fixed
    bottom: 0
    left: 50%
    transform: translateX(-50%)
    width: 100%
    max-width: 768px
    z-index: 99
    display: none

    .link
        display: flex
        height: 50px
        flex-direction: column
        justify-content: center
        align-items: center

        .icon
            transition: 0.2s
            font-size: 20px
            margin-bottom: 2.5px
        .title
            transition: 0.2s
            font-size: 11px
        span
            color: blue
            font-weight: 600

        &.active span
            color: blue

@media screen and (max-width: 812px)
    .bottom-nav
        display: flex

</style>
