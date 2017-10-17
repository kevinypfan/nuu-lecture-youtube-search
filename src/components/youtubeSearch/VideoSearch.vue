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
const API_KEY = "AIzaSyAzpkaq-FANjghQu_DMCMBcMIHOSmnK9_Y";

import SearchBar from './SearchBar.vue'
import VideoDetail from './VideoDetail.vue'
import VideoList from './VideoList.vue'

export default {
  name: 'app',
  props: ['searchTerm'],
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
    this.videoSearch(this.searchTerm)
  },
  watch: {
    searchTerm () {
      this.videoSearch(this.searchTerm)
    }
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
