<template lang="html">
  <div class="search-bar">
    <form @submit.prevent="onFormSubmit">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search for..." aria-label="Search for..." v-model="term">
        <span class="input-group-btn">
          <button class="btn btn-secondary" type="submit">Search</button>
        </span>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  data () {
    return {
      term: ''
    }
  },
  methods: {
    onFormSubmit () {
      this.$emit('onSearchTerm', this.term)
    }
  }
}
</script>

<style lang="css">

</style>
