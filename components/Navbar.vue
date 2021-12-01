<template>
  <div>
    <b-navbar toggleable="lg" type="light" class="header">
      <b-navbar-brand href="#">
        POKEMON
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="text-primary">
          <b-nav-item href="/">
            HOME
          </b-nav-item>
          <b-nav-item href="/favorite">
            FAVORITE
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">
              Search
            </b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="sass" scoped>
.header
    width: 100%
    top: 0
    height: 60px
    bbackground-color: #fff000
    background-image: linear-gradient(315deg, #fff000 0%, #ed008c 74%)
    overflow: hidden
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 1)
    color: blue !important

@media screen and (max-width: 812px)
    .header
        display: none

</style>
