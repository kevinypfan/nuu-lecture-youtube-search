<template lang="html">
  <div class="container">
    <h1>Profile</h1>
    <pre>{{status}}</pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: ''
    }
  },
  created () {
    this.axios.get('https://nuu-leture-blog.herokuapp.com/api/user/check', {headers: {token: window.localStorage.getItem('token')}}).then((response) => {
      this.status = response.data
    }).catch((err) => {
      this.status = err.response.data
    })
  }
}
</script>

<style lang="css">
</style>
