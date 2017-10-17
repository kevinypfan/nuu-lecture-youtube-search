<template lang="html">
  <ul class="col-md-4 list-group">
    <video-item v-for="video in videos" :video="video" @onVideoSelect="onVideoSelect" :key="video.etag"></video-item>
  </ul>
</template>

<script>
import VideoItem from './VideoItem.vue'
export default {
  props: ['videos'],
  components: {
    VideoItem
  },
  methods: {
    onVideoSelect(video) {
      this.$emit('onVideoSelect', video)
    }
  }
}
</script>

<style lang="css">
</style>
