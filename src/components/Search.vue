<template lang="html">
  <div>
    <video-search :searchTerm="$route.params.term"></video-search>
  </div>
</template>

<script>
import VideoSearch from './youtubeSearch/VideoSearch.vue'
export default {
  components: {
    VideoSearch
  },
  
}
</script>

<style lang="css">
</style>
