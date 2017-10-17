<template lang="html">
  <li class="list-group-item" @click="onVideoSelect">
    <div class="video-list media">
      <div class="media-left">
        <img :src="video.snippet.thumbnails.default.url" class="media-object"/>
      </div>
      <div class="media-body">
        <div class="media-heading">
          {{video.snippet.title}}
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ['video'],
  methods: {
    onVideoSelect() {
      this.$emit('onVideoSelect', this.video)
    }
  }
}
</script>

<style lang="css">
</style>
