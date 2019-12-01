<template>
  <div class="home-page">
    <SearchBar />

    <!-- loading status -->
    <div v-if="status === 'loading'" class="container py-32 text-center">
      <Preloader size="big" />
    </div>

    <!-- ready status -->
    <Gallery
      v-else-if="status === 'ready' || status === 'updating'"
      :isLastPage="isLastPage"
      :updating="status === 'updating'"
    />

    <!-- nothing found status -->
    <div v-else-if="status === 'notfound'" class="container py-24">
      <h1>Nothing Found 😥</h1>
    </div>

    <!-- error status -->
    <div v-else-if="status === 'error'" class="container py-24">
      <h1>Something went wrong 🤔</h1>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import Gallery from '@/components/Gallery'
import SearchBar from '@/components/SearchBar'
import Preloader from '@/components/Preloader'

import axios from 'axios'

export default {
  name: 'Home',

  components: {
    Gallery,
    SearchBar,
    Preloader,
  },

  computed: {
    photos() {
      return store.state.photos
    },

    nextPage() {
      return store.state.nextPage
    },

    status() {
      return store.state.status
    },

    isLastPage() {
      return store.state.isLastPage
    },

    vuexHeading() {
      return store.state.heading
    },
  },
}
</script>

<style></style>
