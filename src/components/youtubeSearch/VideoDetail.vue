<template lang="html">
  <div class="col-md-8">
    <div v-if="!logding">Logding...</div>
    <div v-if="logding" class="video-detail">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe :src="url" class="embed-responsive-item"></iframe>
      </div>
      <div class="detail">
        <div>{{video.snippet.title}}</div>
        <div>{{video.snippet.description}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['video'],
  data() {
    return {
      logding: false
    }
  },
  computed: {
    url () {
      return `https://www.youtube.com/embed/${this.video.id.videoId}`
    }
  },
  watch: {
    video (value) {
      if (value) {
        this.logding = true
      }
    }
  }
}
</script>

<style lang="css">
</style>
