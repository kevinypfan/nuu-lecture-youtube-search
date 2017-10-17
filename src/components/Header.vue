<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link tag="a" to="/" class="navbar-brand">Home</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <router-link class="nav-item" v-for="item in menuItem" :to="item.link" tag="li" activeClass="active" :key="item.title">
            <a class="nav-link">{{item.title}}</a>
          </router-link>
        </ul>
        <form class="form-inline" @submit.prevent="submitTerm">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" v-model="term">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      term: ''
    }
  },
  computed: {
    menuItem () {
      var menuItem = [
        { title: 'About', link: '/about'},
        { title: 'Profile', link: '/profile'}
      ]
      return menuItem
    }
  },
  methods: {
    submitTerm () {
      this.$router.push(`/search/${this.term.trim()}`)
    }
  }
}
</script>

<style lang="css">
</style>
