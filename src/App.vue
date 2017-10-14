<template>
  <div id="app">
    <div class="container">
      <search-bar @onSearchTerm="videoSearch"></search-bar>
      <div class="row">
        <video-detail :video="selectedVideo"></video-detail>
        <video-list :videos="videos" @onVideoSelect="onVideoSelect"></video-list>
      </div>
    </div>
  </div>
</template>

<script>
import YTSearch from "youtube-api-search";
const API_KEY = "yourKey";

import SearchBar from './components/SearchBar.vue'
import VideoDetail from './components/VideoDetail.vue'
import VideoList from './components/VideoList.vue'

export default {
  name: 'app',
  data () {
    return {
      videos: [],
      selectedVideo: null
    }
  },
  components: {
    SearchBar,
    VideoDetail,
    VideoList
  },
  methods: {
    videoSearch (term) {
      YTSearch({key: API_KEY, term: term}, (videos) => {
        this.videos = videos
        this.selectedVideo = videos[0]
      })
    },
    onVideoSelect(video) {
      this.selectedVideo = video
    }
  },
  created() {
    this.videoSearch('2017-07-31 Vue.js入門')
  }
}
</script>

<style lang="css">
  .search-bar {
    margin: 20px;
  }

  .video-item img {
    max-width: 64px;
  }
  .video-detail .detail {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .list-group-item {
    cursor: pointer;
  }
  .list-group-item:hover {
    background-color: #eee;
  }

</style>
