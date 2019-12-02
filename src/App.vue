<template>
  <div id="app">
    <Navbar />

    <!-- loading status -->
    <div v-if="status === 'loading'" class="container py-32 text-center">
      <Preloader size="big" />
    </div>
    <!-- nothing found status -->
    <div v-else-if="status === 'notfound'" class="container py-24">
      <h1>Nothing Found 😥</h1>
    </div>

    <!-- error status -->
    <div v-else-if="status === 'error'" class="container py-24">
      <h1>Something went wrong 🤔</h1>
    </div>

    <keep-alive v-else>
      <router-view :key="$route.fullPath" />
    </keep-alive>

    <Footer />

    <button
      @click="scrollToTop"
      type="button"
      class="z-depth-3 grey darken-4 btn-floating btn-large waves-effect waves-light z-10 scroll-to-top"
    >
      <i class="material-icons">arrow_upward</i>
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
// const Preloader = () => import('@/components/Preloader')

import '@/assets/css/icons.css'
import 'tailwindcss/dist/utilities.css'
import '@/assets/css/materialize.min.css'
import '@/assets/js/materialize.min.js'
import '@/assets/css/custom.scss'

export default {
  name: 'App',

  components: {
    Navbar,
    Footer,
    Preloader,
  },

  computed: {
    status() {
      return this.$store.state.status
    },
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },

  created: function() {
    axios.defaults.headers.common.Authorization = `Client-ID ${process.env.VUE_APP_UNSPLASH_TOKEN}`
    this.$store.dispatch('fetchPhotos', {
      replace: true,
      heading: 'Latest photos',
    })
  },
}
</script>
