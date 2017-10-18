<template lang="html">
  <div class="container">
    <form @submit.prevent="submitSignup">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
      </div>
      <div class="form-group">
        <label for="exampleInputName1">Name</label>
        <input type="text" class="form-control" id="exampleInputName1" placeholder="Name" v-model="name">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <div class="alert alert-danger" role="alert" v-if="status">
      {{status}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      name: '',
      status: ''
    }
  },
  methods: {
    submitSignup () {
      this.axios.post('https://nuu-leture-blog.herokuapp.com/api/user/signup', {email: this.email, name: this.name, password: this.password}).then((response) => {
        window.localStorage.setItem('token', response.headers['token'])
        this.$router.push('/profile')
      }).catch((err) => {
        this.status = err.response.data
      })
    }
  }
}
</script>

<style lang="css">
</style>
